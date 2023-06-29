import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import User from "../user/User";
import "../../css/Post.css";
import { Avatar, Button, Dialog, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  MoreVert,
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  DeleteOutline,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../actions/postActions";
import { getFollowingPost } from "../../actions/userActions";

const Post = ({
  postId,
  caption,
  postImage,
  likes = [],
  comments = [],
  ownerImage,
  isDelete = false,
  isAccount = true,
  ownerName,
  ownerId,
}) => {
  const [liked, setLiked] = useState(false);
  const [likedUser, setLikedUser] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [commentToggle, setCommentToggle] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [commentOpen, setCommentOpen] = useState(false);
  const dispatch = useDispatch();
  const handleLikeDislike = async (id) => {
    setLiked(!liked);
    toast.success(liked ? "Post DisLiked" : "Post Liked", {
      // icon: '👏',
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    await dispatch(likePost(id));
    dispatch(getFollowingPost());
  };

  const addCommentHandler = () => {};

  const handleClickOpen = () => {
    setCommentOpen(true);
  };
  useEffect(() => {
    likes.forEach((like) => {
      if (like._id == user._id) {
        setLiked(true);
      }
    });
  }, [likes, user._id]);

  return (
    <>
      <Toaster position="bottom-center" />
      <div className="post">
        <div className="postHeader">
          {isAccount ? (
            <Button>
              <MoreVert />
            </Button>
          ) : null}
        </div>
        <img src={postImage} alt="Post" />
        <div className="postDetails">
          <Avatar src={ownerImage} sx={{ height: "3vmax", width: "3vmax" }} />
          <Link to={`/user/${ownerId}`}>
            <Typography style={{ fontWeight: "700" }}>{ownerName}</Typography>
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
          <LikesDialog likes={likes} />
        </button>

        <div className="postFooter">
          <Button onClick={() => handleLikeDislike(postId)}>
            {liked ? <Favorite style={{ color: "red" }} /> : <FavoriteBorder />}
          </Button>
          <Button>
            <CommentsDialog
              comments={comments}
              setCommentValue={setCommentValue}
              commentValue={commentValue}
              commentOpen={commentOpen}
            />
            <ChatBubbleOutline
              onClick={() => {
                handleClickOpen;
              }}
            />
          </Button>
          <Button>{isDelete ? <DeleteOutline /> : null}</Button>
        </div>

        <Dialog
          open={likedUser}
          onClose={() => setLikedUser(!likedUser)}
        ></Dialog>
      </div>
    </>
  );
};

function LikesDialog({ likes }) {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography
        variant="none"
        onClick={() => {
          likes.length && handleClickOpen;
        }}
      >
        {likes.length} Likes
      </Typography>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="DialogBox">
          <Typography variant="h4">Liked By</Typography>

          {likes &&
            likes.map((like) => (
              <User
                key={like._id}
                userId={like._id}
                name={like.name}
                avatar={like.avatar.url}
              />
            ))}
        </div>
      </Dialog>
    </div>
  );
}

function CommentsDialog({
  comments,
  setCommentValue,
  commentValue,
  commentOpen,
  setCommentOpen,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setCommentOpen(false);
  };

  return (
    <div>
      <Typography variant="none" marginRight={"1rem"}>
        {comments.length}
      </Typography>
      <Dialog
        fullScreen={fullScreen}
        open={commentOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="DialogBox">
          <Typography variant="h4">Liked By</Typography>
          <form className="commentForm">
            <input
              type="text"
              name=""
              value={commentValue}
              onChange={() => setCommentValue(e.target.value)}
              placeholder="Write a comment"
            />
          </form>

          {comments &&
            comments.map(
              (comment) => ""
              // <User
              //   key={comment._id}
              //   userId={comment._id}
              //   name={comment.name}
              //   avatar={comment.avatar.url}
              // />
            )}
        </div>
      </Dialog>
    </div>
  );
}

export default Post;
