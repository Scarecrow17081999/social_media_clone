import axios from "axios";
const url = `${import.meta.env.VITE_API_URL}:${
  import.meta.env.VITE_API_PORT
}/api/v1`;

// LOGIN USER //
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });
    const { data } = await axios.post(
      `${url}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
          credentials: true,
        },
      }
    );
    dispatch({
      type: "loginSuccess",
      payload: data.user,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "loginFailure",
      payload: error?.response?.data,
    });
  }
};
// LOAD USER //
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });
    const { data } = await axios.get(`${url}/me`);
    dispatch({
      type: "loadUserSuceess",
      payload: data.user,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "loadUserFailure",
      payload: error?.response?.data,
    });
  }
};
