import axios from "axios";
const url = `${import.meta.env.VITE_API_URL}:${
  import.meta.env.VITE_API_PORT
}/api/v1`;

// LOGIN USER //
export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "likeRequest",
    });
    const { data } = await axios.get(`${url}/post/${id}`, {
      withCredentials: true,
    });
    dispatch({
      type: "likeSuccess",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "likeFailure",
      payload: error?.response?.data,
    });
  }
};
