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
  const controller = new AbortController();
  const signal = controller.signal;
  const cancelReq = controller.abort;

  const getReqApi = () => {
    setLoading(true);
    setResponse(null);
    setError(null);
    const config = header
      ? {
          headers: {
            authorization: `bearer ${cookies.token}`,
            signal: signal,
            ...header,
          },
        }
      : {
          headers: {
            authorization: `bearer ${cookies.token}`,
          },
        };
    httpService[method.toLocaleLowerCase()](path, config)
      .then((res) => {
        setLoading(false);
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 403) {
          refreshToken("get");
        } else {
          setLoading(false);
          setError(err);
        }
      });
  };
  const postReqApi = (sendData) => {
    setLoading(true);
    setResponse(null);
    setError(null);
    const config = header
      ? {
          headers: {
            authorization: `bearer ${cookies.token}`,
            signal: signal,
            ...header,
          },
        }
      : {
          headers: {
            authorization: `bearer ${cookies.token}`,
          },
        };
    httpService[method.toLocaleLowerCase()](path, sendData, config)
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

  const refreshToken = (backType) => {
    httpService
      .get("/auth/refreshtoken", {
        headers: { refresh: `bearer ${cookies.refreshToken}` },
      })
      .then((res) => {
        document.cookie = `token=${res.data.token};path=/`;
        document.cookie = `refreshToken=${res.data.refreshToken};path=/`;
        cookies.token = res.data.token;
        cookies.refreshToken = res.data.refreshToken;
        dispatch(userLoginSuccess(res.data));
        if (backType === "get") {
          getReqApi();
        } else if (backType === "post") {
          postReqApi();
        }
      })
      .catch((err) => {
        document.cookie = `token=${cookies.token};path=/;max-age=0`;
        document.cookie = `refreshToken=${cookies.refreshToken};path=/;max-age=0`;
        dispatch(userLoginSuccess(null));
        navigate("/auth/login");
      });
  };

  const clearErrorsState = () => {
    setError(null);
  };

  return [
    response,
    error,
    loading,
    getReqApi,
    postReqApi,
    clearErrorsState,
    cancelReq,
  ];
}

export default useApi;
