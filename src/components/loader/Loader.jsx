import React from "react";
import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex justify-center items-center absolute z-30 w-full h-screen">
      <ClipLoader color="#60a5fa" speedMultiplier={0.9} />
    </div>
  );
}

export default Loader;
