import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import LoginFormInput from "../../components/input/LoginFormInput";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCookie } from "../../helper/getCookie";
import { userLoginSuccess } from "../../redux/register/loginAction";

function ChangePass() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    const cookies = getCookie();
    document.cookie = `token=${cookies.token};path=/;max-age=0`;
    document.cookie = `refreshToken=${cookies.refreshToken};path=/;max-age=0`;
    dispatch(userLoginSuccess(null));
    navigate("/auth/login");
  };

  const [changePassRes, changePassErr, changePassLoading, get, changePassPost] =
    useApi({
      method: "post",
      path: "/users/changepass",
      header: { "Content-Type": "application/x-www-form-urlencoded" },
    });

  const onSubmit = (data) => {
    const { confirmPassword, ...passwordData } = data;
    changePassPost(passwordData);
  };

  useEffect(() => {
    if (changePassRes) {
      setTimeout(() => {
        logoutHandler();
      }, 2000);
    }
  }, [changePassRes]);

  return (
    <div className=" flex flex-col items-center">
      <h2 className="mt-6 text-3xl font-bold text-white text-center">Change Password</h2>
      {changePassRes ? (
        <p className="mt-2 text-sm max-w-sm p-1 text-center text-green-500">
          Changed password successfully. Transferring to login page...
        </p>
      ) : (
        <p className="mt-2 text-sm max-w-sm p-1 text-center text-gray-500">
          You can change your password by entering the previous password
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className=" my-6 w-10/12">
        <LoginFormInput
          type={"text"}
          register={register}
          validation={{
            required: "This field is required",
          }}
          error={errors.oldPassword}
          name={"oldPassword"}
          label={"Old Password"}
        />

        <LoginFormInput
          type={"password"}
          register={register}
          validation={{
            required: "This field is required",
          }}
          error={errors.newPassword}
          name={"newPassword"}
          label={"New Password"}
        />
        {/* confirm password */}
        <LoginFormInput
          type={"password"}
          register={register}
          validation={{
            required: "This field is required",
            validate: (value) => {
              if (value !== watch("newPassword")) {
                return "The entered value does not match the password";
              }
            },
          }}
          error={errors.confirmPassword}
          name={"confirmPassword"}
          label={"Confirm Password"}
        />
        <div className=" mt-4">
          <button
            type="submit"
            disabled={changePassLoading}
            className={
              changePassLoading
                ? "w-full flex justify-center transition bg-gradient-to-r from-neutral-400 to-neutral-500  hover:bg-gradient-to-l hover:from-neutral-400 hover:to-neutral-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer duration-500"
                : "w-full flex justify-center transition bg-gradient-to-r from-blue-400 to-blue-500  hover:bg-gradient-to-l hover:from-blue-400 hover:to-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer duration-500"
            }>
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePass;
