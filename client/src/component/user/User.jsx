import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "./User.css";
const User = ({ userId, name, avatar }) => {
  return (
    <>
      <div className="mw6 center">
        <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <Link to={`/user/${userId}`}>
            <div className="dtc w2 w3-ns v-mid">
              <img
                src={avatar}
                alt={name}
                className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
              />
            </div>
            <div className="dtc v-mid pl3">
              <h1 className="f6 f5-ns fw6 lh-title black mv0">{name} </h1>
              <h2 className="f6 fw4 mt0 mb0 black-60">@{name.split(" ")[0]}</h2>
            </div>
          </Link>
          <div className="dtc v-mid">
            <form className="w-100 tr">
              <button
                className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
                type="submit"
              >
                <Link
                  className="mh2"
                  to={`/user/${userId}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {" "}
                  Follow
                </Link>
              </button>
            </form>
          </div>
        </article>
      </div>
    </>
  );
};

export default User;
