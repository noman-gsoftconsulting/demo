import { LOG_IN, SIGN_UP, LOG_OUT } from "../types";

const initialState = {
  token: "",
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        token: action.payload.jwt,
        isLoggedIn: true,
      };
    }
    case SIGN_UP: {
        return{
            ...state,

        }
    }
    case LOG_OUT: {
      return {
        initialState,
      };
    }
    default:
      return state;
  }
};

export default authReducer;