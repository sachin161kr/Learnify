import React from "react";

import Post from "../components/Post";

import Profile from "../components/Profile";
import Trending from "../components/Trending";

const HomeScreen = () => {
  return (
    <>
      <div className="max-w-full flex flex-row bg-gray-100">
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
