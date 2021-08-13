import {
    LOG_IN,
    SIGN_UP,
    LOG_OUT
  } from "../types";
//   import API from "../../utils/API";
  
  export const login =
    ({ identifier, password }) =>
    async (dispatch) => {
      const body = JSON.stringify({
        identifier,
        password,
      });
  
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
  
      try {
        const response = await API.post(`/auth/local`, body, config);
        dispatch({ type: LOG_IN, payload: response.data });
        return { status: response.status, data: response.data };
      } catch (error) {
        return error
      }
    };
  
  export const logout = () => async (dispatch) => {
    dispatch({ type: LOG_OUT });
  };