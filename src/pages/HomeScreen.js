import React from "react";

import Post from "../components/Post";

import Profile from "../components/Profile";
import Trending from "../components/Trending";

const HomeScreen = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Trending />
        <div className="body">
          <Post />
          <Post />
          <Post />
        </div>
        <Profile />
      </div>
    </>
  );
};

export default HomeScreen;
