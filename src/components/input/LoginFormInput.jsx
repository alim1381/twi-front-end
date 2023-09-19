import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function LoginFormInput({
  register,
  validation,
  error,
  label,
  name,
  type,
  placeholder,
}) {
  const [showPass, setShowPass] = useState(false);
  if (type !== "password")
    return (
      <div className="relative">
        <label
          htmlFor={name}
          className="ml-3 text-sm font-bold text-white tracking-wide">
          {label}{" "}
          <span className="text-red-500 font-extralight text-xs">
            {error?.message ? `* ${error?.message}` : ""}
          </span>
        </label>
        <input
          className={
            error
              ? " w-full mt-2 text-white text-base px-4 py-2 border border-red-500 bg-black focus:outline-none rounded-2xl"
              : " w-full mt-2 text-white text-base px-4 py-2 border border-white bg-black focus:outline-none rounded-2xl focus:border-blue-400"
          }
          {...register(name, validation)}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
        />
      </div>
    );
  if (type === "password") {
    return (
      <div className="relative">
        <label
          htmlFor={name}
          className="ml-3 text-sm font-bold text-white tracking-wide">
          {label}{" "}
          <span className="text-red-500 font-extralight text-xs">
            {error?.message ? `* ${error?.message}` : ""}
          </span>
        </label>
        <div className="mt-2 relative flex items-center">
          <input
            className={
              error
                ? " w-full text-white text-base px-4 py-2 border border-red-500 bg-black focus:outline-none rounded-2xl"
                : " w-full text-white text-base px-4 py-2 border border-white bg-black focus:outline-none rounded-2xl focus:border-blue-400"
            }
            {...register(name, validation)}
            type={showPass ? "text" : "password"}
            id={name}
            name={name}
            placeholder={placeholder}
          />
          <div
            className=" absolute right-0 pr-3 cursor-pointer"
            onClick={() => setShowPass(!showPass)}>
            {showPass ? (
              <AiOutlineEyeInvisible
                color="white"
                className=" fill-neutral-500 w-6 h-6"
              />
            ) : (
              <AiOutlineEye
                color="white"
                className=" fill-neutral-500 w-6 h-6"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginFormInput;
