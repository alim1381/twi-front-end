import React from "react";
import { ClipLoader } from "react-spinners";

function InternalLoader() {
  return (
    <div className="w-full flex justify-center items-center py-3 max-sm:mb-14">
      <ClipLoader color="#60a5fa" speedMultiplier={0.9} />
    </div>
  );
}

export default InternalLoader;
