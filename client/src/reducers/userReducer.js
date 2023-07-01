import { createReducer } from "@reduxjs/toolkit";

const initialState = {};
export const userReducer = createReducer(initialState, {
  loginRequest: (state) => {
    state.loading = true;
  },
  loginSuceess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  loginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  registerRequest: (state) => {
    state.loading = true;
  },

  registerSuceess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  registerFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  loadUserRequest: (state) => {
    state.loading = true;
  },
  loadUserSuceess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },

  loadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});

export const postOfFollowingReducer = createReducer(initialState, {
  postOfFollowingRequest: (state) => {
    state.loading = true;
  },
  postOfFollowingSuceess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  postOfFollowingFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
export const allUsersReducer = createReducer(initialState, {
  allUsersRequest: (state) => {
    state.loading = true;
  },
  allUsersSuceess: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  allUsersFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
export const logoutReducer = createReducer(initialState, {
  logoutRequest: (state) => {
    state.loading = true;
  },
  logoutSuceess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
    state.isAuthenticated = false;
    state.user = null;
  },
  logoutFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
