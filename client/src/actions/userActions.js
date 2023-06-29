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
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
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
    const { data } = await axios.get(`${url}/me`, {
      withCredentials: true,
    });
    dispatch({
      type: "loadUserSuceess",
      payload: data.user,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "loadUserFailure",
      payload: error?.response?.data?.message,
    });
  }
};
// GET FOLLOWING USER POST //
export const getFollowingPost = () => async (dispatch) => {
  try {
    dispatch({
      type: "postOfFollowingRequest",
    });
    const { data } = await axios.get(`${url}/posts`, { withCredentials: true });
    dispatch({
      type: "postOfFollowingSuceess",
      payload: data.posts.reverse(),
    });
  } catch (error) {
    dispatch({
      type: "postOfFollowingFailure",
      payload: error?.response?.data?.message,
    });
  }
};
// GET All USERS //
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "allUsersRequest",
    });
    const { data } = await axios.get(`${url}/users`, { withCredentials: true });
    dispatch({
      type: "allUsersSuceess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "allUsersFailure",
      payload: error?.response?.data?.message,
    });
  }
};
