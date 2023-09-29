const userLoginSuccess = (data) => {
  return {
    type: "USER_LOGIN_SUCCESS",
    payload: data,
  };
};

const updateUserData = (data) => {
  return {
    type: "UPDATE_USER_DATA",
    payload: data,
  };
};

export { userLoginSuccess , updateUserData };
