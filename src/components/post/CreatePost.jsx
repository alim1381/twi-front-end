import React, { useEffect, useState } from "react";
import UserAvatar from "../userIcon/UserAvatar";
import { useSelector } from "react-redux";
import { FiImage } from "react-icons/fi";
import { useForm } from "react-hook-form";
import useApi from "../../hooks/useApi";
import InternalLoader from "../loader/InternalLoader";

function CreatePost({ setUpdatePage }) {
  const { userData } = useSelector((state) => state.loginState);
  const [postImage, setPostImage] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [ response, error, loading, getReqApi , postReqApi ] = useApi({
    method: "post",
    path: "/posts/create",
    header: { "Content-Type": "multipart/form-data" },
  });

  const onSubmit = (data) => {
    const sendData = {
      ...data,
      image: postImage,
    };
    postReqApi(sendData);
  };

  useEffect(() => {
    if (response) {
      setUpdatePage((prev) => prev + 1);
      setPostImage(null);
      setValue("textBody", "");
      clearErrors("textBody");
    }
  }, [response]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="m-2 w-10 h-10 ">
          <UserAvatar
            avatar={
              userData.avatar
                ? `${import.meta.env.VITE_STATIC_FILES_URL}${userData.avatar}`
                : null
            }
          />
        </div>

        <div
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 px-2 pt-2 mt-2">
          <textarea
            className={
              errors.textBody
                ? " bg-transparent text-gray-300 border border-red-500 rounded-md p-1 font-medium text-lg w-full focus:outline-none"
                : " bg-transparent text-gray-300 font-medium text-lg w-full focus:outline-none"
            }
            {...register("textBody", { required: "This field is required" })}
            rows="2"
            cols="50"
            placeholder={
              errors.textBody
                ? `${errors.textBody.message} !`
                : "What's happening?"
            }></textarea>
        </div>
      </div>
      {postImage && (
        <div className="w-full p-3">
          <div className=" rounded-md overflow-hidden w-full">
            <img
              className="w-full"
              src={URL.createObjectURL(postImage)}
              alt="postImage"
            />
          </div>
        </div>
      )}
      {/* <!--middle creat tweet below icons--> */}
      <div className="flex">
        <input
          type="file"
          accept="image/jpeg, image/png,"
          onChange={(e) => {
            setPostImage(e.target.files[e.target.files.length - 1]);
          }}
          id="image"
          className=" hidden"
        />

        <div className="flex flex-1 justify-between items-center">
          <label htmlFor="image">
            <FiImage className=" transition cursor-pointer text-white hover:text-blue-400 ml-8 w-6 h-6" />
          </label>
          <button
            type="submit"
            className={
              loading
                ? "bg-gray-400 mt-5 mb-5 hover:bg-gray-500 text-gray-100 font-bold py-2 px-8 rounded-full mr-8 float-right"
                : "bg-blue-400 mt-5 mb-5 hover:bg-blue-500 text-white font-bold py-2 px-8 rounded-full mr-8 float-right"
            }>
            {loading ? "Sending..." : "Post"}
          </button>
        </div>
      </div>

      <hr className="border-gray-600 mb-2" />
      <hr className="border-gray-600" />
    </form>
  );
}

export default CreatePost;
