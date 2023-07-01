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
      <main style={{ width: "60%" }} className="loginForm pa4 black-90">
        <form onSubmit={loginHandler} className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                placeholder="Enter Email..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password..."
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer">
              <input type="checkbox" /> Remember me
            </label>
          </fieldset>
          <div className="">
            <button
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
            >
              Sign In{" "}
            </button>
          </div>
          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db">
              Sign up
            </a>
            <Link to="/forgot/password" className="f6 link dim black db">
              Forgot your password?
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
