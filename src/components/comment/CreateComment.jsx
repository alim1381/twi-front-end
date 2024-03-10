import React, { useEffect, useState } from "react";
import UserAvatar from "../userIcon/UserAvatar";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import useApi from "../../hooks/useApi";

function CreateComment({ setUpdatePage, postId }) {
  const { userData } = useSelector((state) => state.loginState);
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [response, error, loading, getReqApi, postReqApi] = useApi({
    method: "post",
    path: "/posts/comment",
    header: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  const onSubmit = (data) => {
    postReqApi({ ...data, postId: postId });
  };

  useEffect(() => {
    if (response) {
      setUpdatePage((prev) => prev + 1);
      setValue("text", "");
      clearErrors("text");
    }
  }, [response]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="m-2 w-10 h-10 ">
          <UserAvatar
            avatar={
              userData.avatar
                ? `${userData.avatar}`
                : null
            }
          />
        </div>

        <div
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 px-2 pt-2 mt-2">
          <textarea
            className={
              errors.text
                ? " bg-transparent text-gray-300 border border-red-500 rounded-md p-1 font-medium text-lg w-full focus:outline-none"
                : " bg-transparent text-gray-300 font-medium text-lg w-full focus:outline-none"
            }
            {...register("text", { required: "This field is required" })}
            rows="2"
            cols="50"
            placeholder={
              errors.text
                ? `${errors.text.message} !`
                : "What is your comment about this post?"
            }></textarea>
        </div>
      </div>

      {/* <!--middle creat tweet below icons--> */}
      <div className="flex">
        <div className="flex-1">
          <button
            type="submit"
            className={
              loading
                ? "bg-gray-400 mt-5 mb-5 hover:bg-gray-500 text-gray-100 font-bold py-2 px-8 rounded-full mr-8 float-right"
                : "bg-blue-400 mt-5 mb-5 hover:bg-blue-500 text-white font-bold py-2 px-8 rounded-full mr-8 float-right"
            }>
            {loading ? "Sending..." : "Comment"}
          </button>
        </div>
      </div>

      <hr className="border-gray-600 mb-2" />
      <hr className="border-gray-600" />
    </form>
  );
}

export default CreateComment;
