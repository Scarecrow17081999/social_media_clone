import { configureStore } from "@reduxjs/toolkit";
import {
  allUsersReducer,
  postOfFollowingReducer,
  userReducer,
} from "./reducers/userReducer";
import { commentsReducer, likeReducer } from "./reducers/postReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    likes: likeReducer,
    comments: commentsReducer,
  },
});

export default store;
