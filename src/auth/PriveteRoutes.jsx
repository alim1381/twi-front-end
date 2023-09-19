import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../helper/getCookie";
import { httpService } from "../core/http-service";
import { userLoginSuccess } from "../redux/register/loginAction";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";

function PriveteRoutes({ children }) {
  const { userData } = useSelector((state) => state.loginState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {pathname} = useLocation()
  const [isLoading, setIsLoading] = useState(false);
  const cookies = getCookie();
  const isLogged = cookies ? true : false;
  
  useEffect(() => {
    if (!userData && !cookies) {
      navigate("/auth/login" , {state : pathname});
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
        document.cookie = `token=${cookies.token};max-age=0`
        document.cookie = `refreshToken=${cookies.refreshToken};max-age=0`
        navigate("/auth/login" , {state : pathname});
      });
  }
}

export default PriveteRoutes;
