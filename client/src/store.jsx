import { configureStore } from "@reduxjs/toolkit";
import {
  allUsersReducer,
  logoutReducer,
  postOfFollowingReducer,
  userReducer,
} from "./reducers/userReducer";
import {
  commentsReducer,
  likeReducer,
  myPostsReducer,
} from "./reducers/postReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    likes: likeReducer,
    comments: commentsReducer,
    myPosts: myPostsReducer,
    logout: logoutReducer,
  },
});

export default store;
