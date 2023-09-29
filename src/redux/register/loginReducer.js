const initialState = {
  userData: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      return {
        userData: action.payload,
      };

    case "UPDATE_USER_DATA":
      return {
        userData: {
          ...state.userData,
          name: action.payload.name,
          avatar: action.payload.avatar,
        },
      };
    default:
      return state;
  }
};

export default loginReducer;
