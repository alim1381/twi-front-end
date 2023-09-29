import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import SelectAvatarImage from "../../components/userIcon/SelectAvatarImage";
import { useForm } from "react-hook-form";
import LoginFormInput from "../../components/input/LoginFormInput";
import UserAvatar from "../../components/userIcon/UserAvatar";
import { AiOutlineCamera } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import InternalLoader from "../../components/loader/InternalLoader";
import { useNavigate } from "react-router-dom";
import { updateUserData } from "../../redux/register/loginAction";

function EditProfile() {
  const { userData } = useSelector((state) => state.loginState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatarImage, setAvatarImage] = useState(null);
  const [lastAvatar, setLastAvatar] = useState(null);
  const [deleteAvatar, setDeleteAvatar] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();
  const [
    editProfileRes,
    editProfileErr,
    editProfileLoading,
    get,
    editProfilePost,
  ] = useApi({
    method: "post",
    path: "/users/editprofile",
    header: {
      "Content-Type": "multipart/form-data",
    },
  });

  const [fetchProfileRes, fetchProfileErr, fetchProfileLoading, fetchProfile] =
    useApi({
      method: "get",
      path: `/users/${userData.id}`,
    });

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (fetchProfileRes) {
      setLastAvatar(fetchProfileRes.avatar);
      setValue("name", fetchProfileRes.name);
      setValue("bio", fetchProfileRes.bio || "");
    }
  }, [fetchProfileRes]);

  useEffect(() => {
    if (editProfileRes) {
      dispatch(updateUserData(editProfileRes.profile));
      setTimeout(() => {
        navigate(`/profile/${userData.id}`);
      }, 2000);
    }
  }, [editProfileRes]);
  const deleteAvatarHandler = () => {
    setAvatarImage(null);
    setDeleteAvatar(1);
    setLastAvatar(null);
  };
  const onSubmit = (data) => {
    editProfilePost({
      avatar: avatarImage,
      name: data.name,
      bio: data.bio,
      deleteAvatar: deleteAvatar,
    });
  };

  if (fetchProfileRes)
    return (
      <div className=" flex flex-col items-center">
        {(fetchProfileLoading || editProfileLoading) && <InternalLoader />}
        <h2 className="mt-6 text-3xl font-bold text-white">Edit Profile</h2>
        {editProfileRes ? (
          <p className="mt-2 text-sm text-green-500">
            Edit Profile successfully. Transferring to login page...
          </p>
        ) : (
          <p className="mt-2 text-sm text-gray-500">
            You can change your Profile Information
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className=" my-6 w-10/12">
          <div className="w-full flex flex-col items-center">
            <div className="w-20 h-20 relative overflow-hidden rounded-full avatar-hover">
              {lastAvatar ? (
                <label htmlFor="avatar" className="w-20 h-20">
                  <UserAvatar
                    avatar={`${
                      import.meta.env.VITE_STATIC_FILES_URL
                    }${lastAvatar}`}
                  />
                </label>
              ) : (
                <label htmlFor="avatar" className="w-20 h-20">
                  <UserAvatar
                    avatar={
                      avatarImage ? URL.createObjectURL(avatarImage) : null
                    }
                  />
                </label>
              )}
              <div className=" camera-up bg-[#37415190] p-1 w-full h-5 flex items-center justify-center absolute bottom-0">
                <AiOutlineCamera color="white" />
              </div>
            </div>
            {(lastAvatar || avatarImage) && (
              <button
                type="button"
                onClick={deleteAvatarHandler}
                className=" bg-neutral-800 text-white p-2 mt-3">
                <BsFillTrashFill />
              </button>
            )}
            <input
              type="file"
              accept="image/jpeg, image/png,"
              onChange={(e) => {
                setLastAvatar(null);
                setDeleteAvatar(0);
                setAvatarImage(e.target.files[e.target.files.length - 1]);
              }}
              className="hidden"
              id="avatar"
            />
          </div>

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

          <div className="relative">
            <label
              htmlFor={"bio"}
              className="ml-3 text-sm font-bold text-white tracking-wide">
              Bio
            </label>

            <textarea
              className={
                " w-full mt-2 text-white text-base px-4 py-2 border border-white bg-black focus:outline-none rounded-2xl focus:border-blue-400"
              }
              {...register("bio")}
              rows="2"
              cols="50"></textarea>
          </div>

          <div className=" mt-4">
            <button
              type="submit"
              disabled={editProfileLoading}
              className={
                editProfileLoading
                  ? "w-full flex justify-center transition bg-gradient-to-r from-neutral-400 to-neutral-500  hover:bg-gradient-to-l hover:from-neutral-400 hover:to-neutral-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer duration-500"
                  : "w-full flex justify-center transition bg-gradient-to-r from-blue-400 to-blue-500  hover:bg-gradient-to-l hover:from-blue-400 hover:to-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer duration-500"
              }>
              Edit Profile
            </button>
          </div>
        </form>
      </div>
    );
}

export default EditProfile;
