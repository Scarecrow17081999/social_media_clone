import React from "react";
import "../../css/Header.css";
import { Link } from "react-router-dom";
import {
  Home,
  Add,
  Search,
  AccountCircle,
  HomeOutlined,
  AddOutlined,
  AccountCircleOutlined,
  SearchOutlined,
} from "@mui/icons-material";
const Header = () => {
  const [tab, setTab] = React.useState(window.location.pathname);

  const style = {
    color: "black",
  };
  return (
    <div className="header">
      <Link
        onClick={() => {
          setTab("/");
        }}
        to="/"
      >
        {tab === "/" ? <Home style={style} /> : <HomeOutlined />}
      </Link>
      <Link
        onClick={() => {
          setTab("/new-post");
        }}
        to="/new-post"
      >
        {tab === "/new-post" ? <Add style={style} /> : <AddOutlined />}
      </Link>

      <Link
        onClick={() => {
          setTab("/search");
        }}
        to="/search"
      >
        {tab === "/search" ? <Search style={style} /> : <SearchOutlined />}
      </Link>
      <Link
        onClick={() => {
          setTab("/account");
        }}
        to="/account"
      >
        {tab === "/account" ? (
          <AccountCircle style={style} />
        ) : (
          <AccountCircleOutlined />
        )}
      </Link>
    </div>
  );
};

export default Header;
