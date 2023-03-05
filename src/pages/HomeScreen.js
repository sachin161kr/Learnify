import React from "react";

import Post from "../components/Post";

import Profile from "../components/Profile";
import Trending from "../components/Trending";

const HomeScreen = () => {
  return (
    <>
      <div className="max-w-full bg-[#1f2833] flex flex-row">
        <Trending />
        <div className="grow mx-3">
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
