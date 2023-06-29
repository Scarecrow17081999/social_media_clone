import { configureStore } from "@reduxjs/toolkit";
import {
  allUsersReducer,
  postOfFollowingReducer,
  userReducer,
} from "./reducers/userReducer";
import { likeReducer } from "./reducers/postReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    likes: likeReducer,
  },
});

export default store;
