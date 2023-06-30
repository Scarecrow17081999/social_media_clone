import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Login from "./component/login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./actions/userActions";
import Home from "./component/home/Home";
import Account from "./component/account/Account";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      {isAuthenticated && <Header />}
      <Routes>
        <Route
          exact
          path="/"
          element={isAuthenticated ? <Home /> : <Login />}
        ></Route>
        <Route
          path="/account"
          element={isAuthenticated ? <Account /> : <Login />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
