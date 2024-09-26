import { types } from "../types/types";

const initialState = {
  isLoggedIn: false,
};

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case types.logout:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
