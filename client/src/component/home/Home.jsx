import React from "react";
import "../../css/Home.css";
import User from "../user/User";
import Post from "../post/Post";
const Home = () => {
  return (
    <div className="home">
      <div className="homeright">
        <User
          userId={"user._id"}
          name={"user.name"}
          avatar={
            "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
          }
        />
      </div>
      <div className="homeleft">
        <Post
          postId={""}
          caption={""}
          postImage={
            "https://gumlet.assettype.com/nationalherald%2F2021-06%2F5b7ab58f-690a-4ebc-b543-c05ad62bb151%2FInstagram_rolls_out_full_screen__30_second_ads_in_Reels.jpg?rect=196%2C0%2C1804%2C1015&auto=format%2Ccompress&fmt=webp&w=1200"
          }
          likes={[]}
          comments={[]}
          ownerImage={""}
          isDelete={false}
          isAccount={false}
        />
      </div>
    </div>
  );
};

export default Home;
