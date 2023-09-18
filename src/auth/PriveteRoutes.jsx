import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../helper/getCookie";
import { httpService } from "../core/http-service";
import { userLoginSuccess } from "../redux/register/loginAction";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";

function PriveteRoutes({ children }) {
  const { userData } = useSelector((state) => state.loginState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const cookies = getCookie();
  const isLogged = cookies ? true : false;

  useEffect(() => {
    if (!userData && !cookies) {
      navigate("/auth/login");
    }
  }, []);
  
  if (isLoading) return <Loader />;

  if (userData) return children;


  if (!userData && isLogged) {
    setIsLoading(true);
    httpService
      .get("/auth/verifyToken", {
        headers: { authorization: `bearer ${cookies.token}` },
      })
      .then((res) => {
        dispatch(
          userLoginSuccess({ ...res.data, refreshToken: cookies.refreshToken })
        );
        setIsLoading(false);
        return children;
      })
      .catch((err) => {
        navigate("/auth/login");
      });
  }
}

export default PriveteRoutes;
