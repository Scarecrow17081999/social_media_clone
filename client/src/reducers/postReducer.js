import { createReducer } from "@reduxjs/toolkit";

const initialState = {};
export const likeReducer = createReducer(initialState, {
  likeRequest: (state) => {
    state.loading = true;
  },
  likeSuceess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  likeFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
  clearErrors: (state) => {
    state.message = null;
  },
});

export const commentsReducer = createReducer(initialState, {
  addCommentsRequest: (state) => {
    state.loading = true;
  },
  addCommentsSuceess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  addCommentsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  deleteCommentsRequest: (state) => {
    state.loading = true;
  },
  deleteCommentsSuceess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deleteCommentsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
export const myPostsReducer = createReducer(initialState, {
  myPostsRequest: (state) => {
    state.loading = true;
  },
  myPostsSuceess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  myPostsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
