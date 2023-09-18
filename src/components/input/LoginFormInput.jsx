import React from "react";

function LoginFormInput({
  register,
  validation,
  error,
  label,
  name,
  type,
  placeholder,
}) {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="ml-3 text-sm font-bold text-white tracking-wide">
        {label} <span className="text-red-500 font-extralight text-xs">{error?.message ? `* ${error?.message}` : ""}</span>
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
}

export default LoginFormInput;
