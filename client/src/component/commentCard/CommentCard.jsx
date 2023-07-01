import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCommentOnPost } from "../../actions/postActions";
import { getFollowingPost } from "../../actions/userActions";

const CommentCard = ({
  avatar,
  name,
  comment,
  userId,
  commentId,
  postId,
  isAccount,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const deleCommentHandler = async () => {
    await dispatch(deleteCommentOnPost(postId, commentId));
    console.log("00-------");
    if (isAccount) {
      console.log("some message");
    } else {
      dispatch(getFollowingPost());
    }
  };
  return (
    <>
      <ul className="list pl0">
        <Link
          //   to={`/user/${userId}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <li className="pa3 pa4-ns bb b--black-05 bg-black-05">
            <img
              className="br3 ba b--black-10 h3 w3"
              //   style={{ width: "10%", borderRadius: "50%" }}
              src={avatar}
              alt="Image"
            />
            <b className="db f3 mb1">{name}</b>
            <span className="f5 db lh-copy measure">{comment}</span>
            {isAccount ? (
              <button
                onClick={deleCommentHandler}
                className="f6 button-reset mv3  bg-white ba b--black-30 dim pointer pv2 ph2 black-100"
                type="submit"
              >
                Delete{" "}
              </button>
            ) : userId == user._id ? (
              <button
                onClick={deleCommentHandler}
                className="f6 button-reset mv3  bg-white ba b--black-30 dim pointer pv2 ph2 black-100"
                type="submit"
              >
                Delete{" "}
              </button>
            ) : null}
          </li>
        </Link>
      </ul>
    </>
  );
};

export default CommentCard;
