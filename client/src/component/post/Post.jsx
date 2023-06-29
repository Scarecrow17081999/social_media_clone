import React from "react";
import "../../css/Post.css";
import { Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import {
  MoreVert,
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  DeleteOutline,
} from "@mui/icons-material";
const Post = ({
  postId,
  caption,
  postImage,
  likes = [],
  comments = [],
  ownerImage,
  isDelete = false,
  isAccount = false,
}) => {
  return (
    <div className="post">
      <div className="postHeader"></div>
      <img src={postImage} alt="Post" />
      <div className="postDetails">
        <Avatar src={ownerImage} sx={{ height: "3vmax", width: "3vmax" }} />
        <Link to={`/user/${"ownerId"}`}>
          <Typography style={{ fontWeight: "700" }}>{"ownerName"}</Typography>
        </Link>
        <Typography
          fontWeight={100}
          color={"rgba(0,0,0,0.582)"}
          style={{ alignSelf: "center" }}
        >
          {caption}
        </Typography>
      </div>

      <button style={{ background: "transparent", border: "none" }}>
        {" "}
        <Typography>5 likes</Typography>
      </button>

      <div className="postFooter"></div>
    </div>
  );
};

export default Post;
