import React from "react";
import { useNavigate } from "react-router-dom";

function Error500() {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-lg px-10 py-8 mx-auto text-white rounded-lg shadow-xl">
        <div className="max-w-md mx-auto space-y-6">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-6xl tracking-tight font-extrabold text-primary-600">
                500
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-400 md:text-4xl">
                Internal Server Error.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500">
                We are already working to solve the problem.{" "}
              </p>
              <p onClick={() => navigate(-1)} className="mb-4 text-lg font-light text-gray-500 hover:text-blue-400 cursor-pointer">
                Try Again
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error500;
