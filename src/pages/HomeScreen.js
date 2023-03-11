import React, { useState, useEffect } from "react";

import Post from "../components/Post";

import axios from "axios";

import ActivityLoader from "../components/ActivityLoader";

import Profile from "../components/Profile";
import Trending from "../components/Trending";

import { useLocation } from "react-router-dom";

const HomeScreen = () => {
  const { state } = useLocation();

  let isLoggedIn = true;

  if (state == null) {
    isLoggedIn = false;
  }

  return (
    <>
      {isLoggedIn == true ? (
        <div className="homescreen max-w-full bg-[#1f2833] flex flex-row">
          <Trending />
          <div className="post w-2/3 mx-3">
            <Post />
          </div>
          <Profile />
        </div>
      ) : (
        <div className="text-white text-2xl">You are not logged in</div>
      )}
    </>
  );
};

export default HomeScreen;
