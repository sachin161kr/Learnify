import React, { useState, useEffect } from "react";

import ActivityLoader from "./ActivityLoader";

import { useNavigate } from "react-router-dom";

import SearchBar from "./searchBar";

import axios from "axios";
const Post = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("username");

  const [allPosts, setAllPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [keyword, setKeyword] = useState("");

  const searchPost = async () => {
    setLoading(true);
    await axios
      .post("https://learnify-server-mu.vercel.app/api/searchItem", {
        keyword: keyword,
      })
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

  const deletePost = (title) => {
    axios
      .post("https://learnify-server-mu.vercel.app/api/deletePost", {
        username: user,
        title: title,
      })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        alert("Post Succesfully deleted");
        getAllPosts();
      })
      .catch((e) => {
        setLoading(false);
        alert("Something went wrong!!");
      });
  };

  return (
    <>
      <SearchBar
        searchPost={searchPost}
        setKeyword={setKeyword}
        getAllPosts={getAllPosts}
        keyword={keyword}
      />
      {loading === true ? (
        <ActivityLoader loading={loading} />
      ) : allPosts.length == 0 ? (
        <div className="text-white text-2xl ml-20 mt-10">Feed is Empty !!!</div>
      ) : (
        <div className="post-parent">
          {allPosts.map((e) => (
            <div className="flex flex-row w-full bg-[#202021] mt-4 rounded-md ">
              <div className="grow">
                <div className="flex flex-row m-5">
                  <div className="flex flex-row w-full">
                    <div>
                      <div className="text-white text-md ">{e.username}</div>
                      <div className="text-white text-sm">10 min ago</div>
                    </div>
                    <div className="grow"></div>
                    {e.username == user ? (
                      <div className="flex flex-row ">
                        <button
                          onClick={() => {
                            navigate("/writepost", {
                              state: {
                                edit: true,
                                title: e.title,
                              },
                            });
                          }}
                          className="text-md text-white bg-[#1f2833] p-2 rounded-md mr-3"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            setLoading(true);
                            deletePost(e.title);
                          }}
                          className="text-md text-white bg-[#1f2833] p-2 rounded-md"
                        >
                          Delete
                        </button>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="m-5">
                  <div className="text-white text-2xl ">{e.title}</div>
                  <div className="text-sm text-white">3 min Read</div>
                </div>
                <div className="m-5">
                  <div className="text-md text-white bg-[#1f2833] p-2 rounded-md">
                    {e.body}
                  </div>
                  <div className="text-sm mt-4 ml-2 text-white">
                    Tags - {e.tag}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      ;
    </>
  );
};

export default Post;
