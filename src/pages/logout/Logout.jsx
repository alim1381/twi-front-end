import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoginSuccess } from "../../redux/register/loginAction";
import { getCookie } from "../../helper/getCookie";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    const cookies = getCookie();
    document.cookie = `token=${cookies.token};path=/;max-age=0`;
    document.cookie = `refreshToken=${cookies.refreshToken};path=/;max-age=0`;
    dispatch(userLoginSuccess(null));
    navigate('/auth/login')
  };

  return (
    <div
      className=" min-h-screen font-medium text-gray-800">
      <div className="max-w-sm p-2 mx-auto text-white border-gray-200 shadow rounded-xl hover:shadow-lg transition-all duration-150 ease-linear">
        <div className="relative p-6">
          <h1 className="text-3xl font-bold">Log Out ?</h1>
          <p className="text-sm text-gray-500">Are you sure you want to log out?</p>
          <div className="flex flex-row mt-6 space-x-2 justify-evenly">
            <button
              onClick={logoutHandler}
              className="w-full py-3 text-sm font-medium text-center text-white transition duration-150 ease-linear bg-red-500  rounded-lg hover:bg-red-600">
              Logout
            </button>
            <button
              onClick={() => navigate(-1)}
              className="w-full py-3 text-sm text-center text-gray-500 transition duration-150 ease-linear bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
