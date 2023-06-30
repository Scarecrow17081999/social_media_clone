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
      type: "likeSuceess",
      payload: data.message,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "likeFailure",
      payload: error?.response?.data?.message,
    });
  }
};
// ADD COMMENT TO A POST //
export const addCommentOnPost = (id, comment) => async (dispatch) => {
  try {
    dispatch({
      type: "addCommentsRequest",
    });
    const { data } = await axios.put(
      `${url}/post/comment/${id}`,
      { comment },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "addCommentsSuceess",
      payload: data.message,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "addCommentsFailure",
      payload: error?.response?.data?.message,
    });
  }
};
// ADD COMMENT TO A POST //
export const deleteCommentOnPost = (id, commentId) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteCommentsRequest",
    });
    const { data } = await axios.delete(`${url}/post/comment/${id}`, {
      commentId,
      withCredentials: true,
    });
    dispatch({
      type: "deleteCommentsSuceess",
      payload: data.message,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "deleteCommentsFailure",
      payload: error?.response?.data?.message,
    });
  }
};
