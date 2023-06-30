import React from "react";
import "../../css/Login.css";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/userActions";
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <div className="login">
      <main style={{ width: "60%" }} className="loginForm" class="pa4 black-90">
        <form onSubmit={loginHandler} class="measure center">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Sign In</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" for="email-address">
                Email
              </label>
              <input
                class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                placeholder="Enter Email..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" for="password">
                Password
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password..."
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <label class="pa0 ma0 lh-copy f6 pointer">
              <input type="checkbox" /> Remember me
            </label>
          </fieldset>
          <div class="">
            <button
              class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
            >
              Sign In{" "}
            </button>
          </div>
          <div class="lh-copy mt3">
            <a href="#0" class="f6 link dim black db">
              Sign up
            </a>
            <Link to="/forgot/password" class="f6 link dim black db">
              Forgot your password?
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
