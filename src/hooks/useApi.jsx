import React, { useEffect, useState } from "react";
import { httpService } from "../core/http-service";
import { getCookie } from "../helper/getCookie";
import { useDispatch } from "react-redux";
import { userLoginSuccess } from "../redux/register/loginAction";
import { useNavigate } from "react-router-dom";

function useApi({ method, path, data, header }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = getCookie();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getReqApi = () => {
    setLoading(true);
    httpService[method.toLocaleLowerCase()](path, {
      headers: {
        authorization: `bearer ${cookies.token}`,
      },
    })
      .then((res) => {
        setLoading(false);
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 403) {
          refreshToken()
        } else {
          setLoading(false);
          setError(err);
        }
      });
  };
  const postReqApi = () => {
    setLoading(true);
    httpService[method.toLocaleLowerCase()](path, data, {
      headers: {
        authorization: `bearer ${cookies.token}`,
      },
    })
      .then((res) => {
        setLoading(false);
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err);
      });
  };

  const refreshToken = () => {
    httpService
      .get("/auth/refreshtoken", {
        headers: { refresh: `bearer ${cookies.refreshToken}` },
      })
      .then((res) => {
        document.cookie = `token=${res.data.token};path=/`;
        document.cookie = `refreshToken=${res.data.refreshToken};path=/`;
        cookies.token = res.data.token
        cookies.refreshToken = res.data.refreshToken
        dispatch(userLoginSuccess(res.data));
        getReqApi()
      })
      .catch((err) => {
        document.cookie = `token=${cookies.token};path=/;max-age=0`;
        document.cookie = `refreshToken=${cookies.refreshToken};path=/;max-age=0`;
        dispatch(userLoginSuccess(null));
        navigate("/auth/login");
      });
  };
  // useEffect(() => {
  //   if (method.toLocaleLowerCase() === "get") {
  //     getReq()
  //   }
  //   if (method.toLocaleLowerCase() === "post") {
  //     postReq()
  //   }
  // }, []);
  return { response, error, loading, getReqApi, postReqApi };
}

export default useApi;
