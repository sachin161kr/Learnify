import React, { useState } from "react";
import ReactDropdown from "react-dropdown";

import ActivityLoader from "../components/ActivityLoader";

import axios from "axios";

const WritePost = () => {
  const [title, setTitle] = useState("");

  const [post, setPost] = useState("");

  const [tag, setTag] = useState(null);

  const [loading, setLoading] = useState(false);

  const options = [
    "C++",
    "React",
    "Web Dev",
    "Java",
    "Python",
    "Backend",
    "Frontend",
  ];

  const makePost = () => {
    if (title.length == 0) {
      alert("Title cannot be empty!!");
      return;
    }

    if (post.length == 0) {
      alert("Post body cannot be empty!!");
      return;
    }

    if (tag == null) {
      alert("Please select a Tag");
      return;
    }

    setLoading(true);
    const body = {
      username: localStorage.getItem("username"),
      email: localStorage.getItem("email"),
      title: title,
      body: post,
      tag: tag.value,
    };

    axios
      .post("https://learnify-server-mu.vercel.app/api/makePost", body)
      .then((res) => {
        if (res.data.status == "error") {
          setLoading(false);
          alert("Something Went Wrong");
          return;
        }
        setLoading(false);
        console.log("Post Success");
        alert("Post Success");
        window.location.href = "/homescreen";
      })
      .catch((e) => {
        setLoading(false);
        console.log("Something went wrong!!");
      });

    console.log(body);
  };

  return (
    <>
      {loading === true ? (
        <ActivityLoader loading={loading} />
      ) : (
        <div className="flex flex-row h-full ">
          <div className="flex  flex-col h-2/3 w-1/2 mt-10 ml-10">
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="p-2 rounded-md text-white text-3xl bg-[#202021]"
              type="text"
              placeholder="Title"
            />
            <textarea
              value={post}
              onChange={(e) => {
                setPost(e.target.value);
              }}
              className="mt-5 text-white rounded-md bg-[#202021] text-xl grow p-2"
              placeholder="Start writing here!!!"
            />
          </div>
          <div className="flex flex-row mt-10">
            <ReactDropdown
              className="ml-10 h-12 bg-[#1f2833] text-white w-64 text-center rounded-md p-3 mt-5"
              options={options}
              onChange={(e) => {
                setTag(e);
              }}
              value={tag}
              placeholder="Select Tag"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                makePost();
              }}
              className="ml-10 bg-[#1f2833] text-white  rounded-md p-3 mt-5 h-12"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WritePost;
