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
import { addCommentOnPost, likePost } from "../../actions/postActions";
import { getFollowingPost } from "../../actions/userActions";
import CommentCard from "../commentCard/CommentCard";

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
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [likedUser, setLikedUser] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [commentOpen, setCommentOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { message: commentMessage, error: commentError } = useSelector(
    (state) => state.comments
  );
  const { message: likeMessage, error: likeError } = useSelector(
    (state) => state.likes
  );

  const handleLikeDislike = async (id) => {
    setLiked(!liked);
    toast.success(likeMessage, {
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

  useEffect(() => {
    likes.forEach((like) => {
      if (like._id == user._id) {
        setLiked(true);
      }
    });
  }, [likes, user._id]);

  const handleCommentOpen = () => {
    setCommentOpen(true);
  };
  const handleCommentClose = () => {
    setCommentOpen(false);
  };

  const addCommentHandler = async (e) => {
    e.preventDefault();
    toast.success(commentMessage, {
      // icon: '👏',
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

    try {
      await dispatch(addCommentOnPost(postId, commentValue));

      if (isAccount) {
        console.log("some message");
      } else {
        dispatch(getFollowingPost());
      }
      setCommentValue("");
    } catch (error) {
      console.log(error);
    }
  };
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

        <div className="postFooter">
          <LikesDialog likes={likes} />
          <Button onClick={() => handleLikeDislike(postId)}>
            {liked ? <Favorite style={{ color: "red" }} /> : <FavoriteBorder />}
          </Button>
          {/* /// comment dialogue // */}
          <div style={{ display: "inline", cursor: "pointer" }}>
            <Typography
              variant="none"
              onClick={() => {
                handleCommentOpen();
              }}
            >
              {comments.length} Comments
            </Typography>
            <Dialog
              fullScreen={fullScreen}
              open={commentOpen}
              onClose={handleCommentClose}
              aria-labelledby="responsive-dialog-title"
            >
              <div className="DialogBox">
                <div className="commentFormContainer">
                  <form onSubmit={addCommentHandler} class="pa4 black-80">
                    <div class="measure">
                      <label for="name" class="f6 b db mb2">
                        Comments
                      </label>
                      <input
                        value={commentValue}
                        onChange={(e) => setCommentValue(e.target.value)}
                        required
                        placeholder="Comment Here..."
                        id="name"
                        class="input-reset ba b--black-20 pa2 mb2 db w-100"
                        type="text"
                        aria-describedby="name-desc"
                      />
                      <small id="name-desc" class="f6 black-60 db mb2">
                        Press Enter to Add a Comment.
                      </small>

                      <Button
                        style={{ display: "none" }}
                        variant="contained"
                        type="submit"
                      >
                        Add
                      </Button>
                    </div>
                  </form>
                </div>

                {comments.length > 0 ? (
                  <>
                    {comments.map((comment) => {
                      return (
                        <CommentCard
                          key={comment._id}
                          userId={comment.user._id}
                          name={comment.user.name}
                          avatar={comment.user.avatar.url}
                          comment={comment.comment}
                          commentId={comment._id}
                          isAccount={isAccount}
                        />
                      );
                    })}
                  </>
                ) : (
                  <>
                    <div
                      style={{ height: "77%" }}
                      class="flex items-center justify-center pa9 bg-lightest-blue navy"
                    >
                      <svg
                        class="w1"
                        dataIcon="info"
                        viewBox="0 0 32 32"
                        style={{ fill: "currentcolor" }}
                      >
                        <title>info icon</title>
                        <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
                      </svg>
                      <span class="lh-title ml3">No Comments Yet.</span>
                    </div>
                  </>
                )}
              </div>
            </Dialog>
          </div>
          <Button>
            <ChatBubbleOutline
              onClick={() => {
                handleClickOpen;
              }}
            />
          </Button>
          <Button>{isDelete ? <DeleteOutline /> : null}</Button>
        </div>
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
    <div style={{ display: "inline", cursor: "pointer" }}>
      <Typography
        variant="none"
        onClick={() => {
          handleClickOpen();
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

export default Post;
