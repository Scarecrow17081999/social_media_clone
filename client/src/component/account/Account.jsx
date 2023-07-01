import Loader from "../loader/Loader";

import { Button, Dropdown, Modal } from "antd";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, styled } from "@mui/material";
import "../../css/Account.css";
import { useDispatch, useSelector } from "react-redux";
import { getFollowingPost, getMyPosts } from "../../actions/userActions";
import backgroundImage from "../../assets/background-image/01.jpeg";
import Post from "../post/Post";
import { Link } from "react-router-dom";

const Contianer = styled("div")({
  backgroundImage: `url(${backgroundImage})`,
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
});
const Account = () => {
  const [modal, contextHolder] = Modal.useModal();
  const dispatch = useDispatch();
  const [followersToggle, setFollowersToggle] = useState(false);
  const [followingToggle, setFollowingToggle] = useState(false);
  const { posts, loading, error } = useSelector((state) => state.myPosts);
  const { user, loading: userLoading } = useSelector((state) => state.user);
  const { message: likeMessage, error: likeError } = useSelector(
    (state) => state.likes
  );

  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      return () => dispatch({ type: "clearErrors" });
    }
    if (likeError) {
      toast.error(likeMessage);
      return () => dispatch({ type: "clearErrors" });
    }
    // if (allUsersError) {
    //   toast.error(allUsersError);
    //   return () => dispatch({ type: "clearErrors" });
    // }
    dispatch(getFollowingPost());
  }, [dispatch]);
  return (
    <>
      {loading || userLoading ? (
        <Loader />
      ) : (
        <div className="account">
          <div className="accountright" style={{ position: "relative" }}>
            <DropdownFunction />

            <div className="db  center mw5 tc black link ">
              <img
                className="br-100 db ba b--black-10"
                alt="Frank Ocean Blonde Album Cover"
                src={user.avatar.url}
              />
              <dl className="mt2 f8 lh-copy">
                <dd className="ml0">{user.name}</dd>
              </dl>
              <div
                style={{
                  display: "flex",
                  fontWeight: "400",
                  justifyContent: "space-around",
                }}
              >
                <div style={{ margin: "20px" }}>
                  <p className="ml0 gray">{user.followers.length}</p>
                  <button
                    className="f6 button-reset mv3  bg-white ba b--black-30 dim pointer pv2 ph2 black-100"
                    style={{ background: "" }}
                    onClick={() => setFollowersToggle(true)}
                  >
                    Followers
                  </button>

                  <Dialog
                    className="bg-black-05"
                    onClose={() => setFollowersToggle(false)}
                    open={followersToggle}
                  >
                    <DialogTitle
                      sx={{ marginRight: "auto", fontFamily: "inherit" }}
                    >
                      #Followers
                    </DialogTitle>
                    <DialogContent style={{ width: "500px" }}>
                      {user?.followers &&
                        user?.followers.map((people) => (
                          <section
                            key={people._id}
                            className="mv2 w-100 items-center  center flex bg-light-gray pa2"
                          >
                            <img
                              className="br-100 pa1 ba b--black-10 h3 w3"
                              src={people.avatar.url}
                              alt=""
                            />
                            <div>
                              <h4 className="mh4  ">{people.name}</h4>
                              <p className="mh4 fw1 f6">
                                @{people.name.split(" ")[0]}
                              </p>
                            </div>
                            <button className="ml-auto mr2 f6 button-reset bg-white ba b--black-10 dim pointer pv1 ph2 black-60">
                              UnFollow
                            </button>
                          </section>
                        ))}
                    </DialogContent>
                  </Dialog>
                </div>
                <div style={{ margin: "20px" }}>
                  <p className="gray">{user.following.length}</p>
                  <div className="">
                    <button
                      className="f6 button-reset mv3  bg-white ba b--black-30 dim pointer pv2 ph2 black-100"
                      style={{ background: "" }}
                      onClick={() => setFollowingToggle(true)}
                    >
                      Following
                    </button>
                    <Dialog
                      className="bg-black-05"
                      onClose={() => setFollowingToggle(false)}
                      open={followingToggle}
                    >
                      <DialogTitle
                        sx={{ marginRight: "auto", fontFamily: "inherit" }}
                      >
                        #Following
                      </DialogTitle>
                      <DialogContent style={{ width: "500px" }}>
                        {user?.following &&
                          user?.following.map((people) => (
                            <section
                              key={people._id}
                              className="mv2 w-100 items-center  center flex bg-light-gray pa2"
                            >
                              <img
                                className="br-100 pa1 ba b--black-10 h3 w3"
                                src={people.avatar.url}
                                alt=""
                              />
                              <div>
                                <h4 className="mh4">{people.name}</h4>
                                <p className="mh4 fw1 f6">
                                  @{people.name.split(" ")[0]}
                                </p>
                              </div>
                              <button className="ml-auto mr2 f6 button-reset bg-white ba b--black-10 dim pointer pv1 ph2 black-60">
                                Follow
                              </button>
                            </section>
                          ))}
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <div style={{ margin: "20px" }}>
                  <div style={{ textAlign: "center" }}>
                    <p className="ml0 gray">{user.posts.length}</p>
                    <button
                      className="f6 button-reset mv3  bg-white ba b--black-30 dim pointer pv2 ph2 black-100"
                      style={{ background: "" }}
                    >
                      Posts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Contianer className="accountleft">
            {posts && posts.length > 0 ? (
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
              <p>No Post Yet</p>
            )}
          </Contianer>
        </div>
      )}
    </>
  );
};

export default Account;

const items = [
  {
    key: "1",
    label: (
      <Link rel="noopener noreferrer" to="/logout">
        Logout
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link target="_blank" rel="noopener noreferrer" to="/update/profile">
        Edit Profile
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link target="_blank" rel="noopener noreferrer" to="update/password">
        Change Password
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link
        style={{ color: "red" }}
        target="_blank"
        rel="noopener noreferrer"
        to="update/password"
      >
        Delete My Account
      </Link>
    ),
  },
];
const DropdownFunction = () => {
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        arrow
      >
        <IconButton sx={{ position: "absolute", right: 8, top: 8 }}>
          <MoreVertIcon />
        </IconButton>
      </Dropdown>
    </>
  );
};

const FollowersContent = () => {
  return (
    <>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </>
  );
};

const FollowingContent = ({ following }) => {
  return (
    <>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </>
  );
};
