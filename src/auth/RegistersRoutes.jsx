import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCookie } from "../helper/getCookie";

function RegistersRoutes({ children }) {
  const { userData } = useSelector((state) => state.loginState);
  const cookies = getCookie();
  const isLogged = cookies ? true : false;

  if (userData || isLogged) return <Navigate to={"/"} />;
  if (!userData && !isLogged) return children;
}
export default RegistersRoutes;
