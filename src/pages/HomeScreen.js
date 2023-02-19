import React from "react";

import Post from "../components/Post";

import Profile from "../components/Profile";
import Trending from "../components/Trending";

const HomeScreen = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "100%",
          display: "flex",
          flexDirection: "row",
          // backgroundImage: "linear-gradient(259deg, rgb(12 228 235 / 83%), rgb(217 87 156 / 54%))"
          backgroundColor : "#acacab4d"
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
