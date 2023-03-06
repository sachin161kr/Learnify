import React, { useState, useEffect } from "react";

import Post from "../components/Post";

import axios from "axios";

import ActivityLoader from "../components/ActivityLoader";

import Profile from "../components/Profile";
import Trending from "../components/Trending";

const HomeScreen = () => {
  const [allPosts, setAllPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("usrname");

  const getAllPosts = async () => {
    //console.log("Hello");
    setLoading(true);
    await axios
      .get("https://learnify-server-mu.vercel.app/api/getAllPosts")
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        let fetchData = res.data;
        fetchData.reverse();

        setAllPosts(fetchData);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <div className="max-w-full bg-[#1f2833] flex flex-row">
        <Trending />
        <div className="grow mx-3">
          {loading === true ? (
            <ActivityLoader loading={loading} />
          ) : allPosts.length === 0 ? (
            <div className="text-white text-2xl ml-20 mt-10">
              Feed is Empty !!!
            </div>
          ) : (
            <Post allPosts={allPosts} />
          )}
        </div>
        <Profile />
      </div>
    </>
  );
};

export default HomeScreen;
