import React, { useState } from "react";
import LoginSideContent from "../../components/side/LoginSideContent";
import { Link, useNavigate } from "react-router-dom";
import LoginFormInput from "../../components/input/LoginFormInput";
import { useForm } from "react-hook-form";
import { httpService } from "../../core/http-service";
import { useDispatch } from "react-redux";
import Loader from "../../components/loader/Loader";
import { userLoginSuccess } from "../../redux/register/loginAction";
import SelectAvatarImage from "../../components/userIcon/SelectAvatarImage";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [avatarImage, setAvatarImage] = useState(null);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setLoading(true);
    setErrorMessage(null);
    const sendData = {
      name: data.name,
      username: data.username,
      password: data.password,
      avatar: avatarImage ? avatarImage : null,
    };
    httpService
      .post("/auth/register", sendData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        document.cookie = `token=${response.data.token};path=/`;
        document.cookie = `refreshToken=${response.data.refreshToken};path=/`;
        dispatch(userLoginSuccess(response.data));
        setLoading(false);
        setErrorMessage(null);
        navigate("/posts");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setErrorMessage(
          err.response?.data
            ? err.response.data?.message
            : "There is a problem communicating"
        );
      });
  };

  return (
    <>
      {loading && <Loader />}
      <div className="relative min-h-screen flex ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
          <LoginSideContent />
          <div className="md:flex md:items-center md:justify-center sm:w-auto md:h-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-white">Welcom !</h2>
                {errorMessage ? (
                  <p className="mt-2 text-sm text-red-500">{errorMessage} !</p>
                ) : (
                  <p className="mt-2 text-sm text-gray-500">
                    If you have an account, log in{" "}
                    <Link to={"/auth/login"} className="text-gray-400">
                      here
                    </Link>
                  </p>
                )}
              </div>
              <div className="flex items-center justify-center space-x-2 max-sm:hidden">
                <span className="h-px w-16 bg-gray-200"></span>
                <span className="text-gray-300 font-normal">
                  or continue with
                </span>
                <span className="h-px w-16 bg-gray-200"></span>
              </div>
              <form
                className="mt-8 space-y-6"
                onSubmit={handleSubmit(onSubmit)}>
                <SelectAvatarImage
                  avatarImage={avatarImage}
                  setAvatarImage={setAvatarImage}
                />
                {/* name */}
                <LoginFormInput
                  type={"text"}
                  register={register}
                  validation={{
                    required: "This field is required",
                  }}
                  error={errors.name}
                  name={"name"}
                  label={"Name"}
                />
                {/* username */}
                <LoginFormInput
                  type={"text"}
                  register={register}
                  validation={{
                    required: "This field is required",
                  }}
                  error={errors.username}
                  name={"username"}
                  label={"Username"}
                />
                {/* password */}
                <LoginFormInput
                  type={"password"}
                  register={register}
                  validation={{
                    required: "This field is required",
                  }}
                  error={errors.password}
                  name={"password"}
                  label={"password"}
                />
                {/* confirm password */}
                <LoginFormInput
                  type={"password"}
                  register={register}
                  validation={{
                    required: "This field is required",
                    validate: (value) => {
                      if (value !== watch("password")) {
                        return "The entered value does not match the password";
                      }
                    },
                  }}
                  error={errors.confirmPassword}
                  name={"confirmPassword"}
                  label={"confirmPassword"}
                />

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={
                      loading
                        ? "w-full flex justify-center transition bg-gradient-to-r from-neutral-400 to-neutral-500  hover:bg-gradient-to-l hover:from-neutral-400 hover:to-neutral-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer duration-500"
                        : "w-full flex justify-center transition bg-gradient-to-r from-blue-400 to-blue-500  hover:bg-gradient-to-l hover:from-blue-400 hover:to-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer duration-500"
                    }>
                    Register
                  </button>
                </div>
              </form>
              <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                <span className="text-gray-500">Do you have an account?</span>
                <Link
                  to={"/auth/login"}
                  className="text-blue-400 no-underline cursor-pointer">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
