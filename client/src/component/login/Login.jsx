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
      <form action="" className="loginForm" onSubmit={loginHandler}>
        <Typography style={{ padding: "2rem" }} variant="h3">
          Login
        </Typography>
        <input
          type="email"
          name=""
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name=""
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/forgot/password">Forgot Password?</Link>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
