import React, { useState, useEffect } from "react";

import Post from "../components/Post";

import axios from "axios";

import ActivityLoader from "../components/ActivityLoader";

import Profile from "../components/Profile";
import Trending from "../components/Trending";

const HomeScreen = () => {
  return (
    <>
      <div className="homescreen max-w-full bg-[#1f2833] flex flex-row">
        <Trending />
        <div className="post w-2/3 mx-3">
          <Post />
        </div>
        <Profile />
      </div>
    </>
  );
};

export default HomeScreen;
