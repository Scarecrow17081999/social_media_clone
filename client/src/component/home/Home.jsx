import React, { useEffect, useState } from "react";
import "../../css/Home.css";
import User from "../user/User";
import Post from "../post/Post";
import { Typography, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";
import { getAllUsers, getFollowingPost } from "../../actions/userActions";
import backgroundImage from "../../assets/background-image/01.jpeg";
import toast, { Toaster } from "react-hot-toast";
const Contianer = styled("div")({
  backgroundImage: `url(${backgroundImage})`,
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
});
const Home = () => {
  const dispatch = useDispatch();
  const {
    posts: incomngPost,
    loading,
    error,
  } = useSelector((state) => state.postOfFollowing);
  const {
    users: allUsers,
    loading: usersLoading,
    error: allUsersError,
  } = useSelector((state) => state.allUsers);
  const [posts, setPosts] = useState(null);
  const [users, setUser] = useState(null);
  useEffect(() => {
    if (error) {
      toast.error(error);
      return () => dispatch({ type: "clearErrors" });
    }
    if (allUsersError) {
      toast.error(allUsersError);
      return () => dispatch({ type: "clearErrors" });
    }
    dispatch(getFollowingPost());
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    setPosts(incomngPost);
    setUser(allUsers);
  }, [incomngPost, dispatch, allUsers]);
  return (
    <>
      {loading || usersLoading ? (
        <Loader />
      ) : (
        <div className="home">
          <Toaster position="bottom-center" />

          <div className="homeright">
            {users ? (
              users.map((user) => (
                <User
                  key={user._id}
                  userId={user._id}
                  name={user.name}
                  avatar={user.avatar.url}
                />
              ))
            ) : (
              <Typography>No Users</Typography>
            )}
          </div>
          <Contianer className="homeleft">
            {posts ? (
              posts.map((post) => (
                <Post
                  key={post._id}
                  postId={post._id}
                  caption={post.caption}
                  postImage={post.image.url}
                  likes={post.likes}
                  comments={post.comments}
                  ownerImage={post.owner.avatar.url}
                  isDelete={false}
                  isAccount={false}
                  ownerName={post.owner.name}
                  ownerId={post.owner._id}
                />
              ))
            ) : (
              <Typography>No Posts Yet</Typography>
            )}
          </Contianer>
        </div>
      )}
    </>
  );
};

export default Home;
