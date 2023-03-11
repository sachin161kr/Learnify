import React, { useState } from "react";
import ReactDropdown from "react-dropdown";

import ActivityLoader from "../components/ActivityLoader";

import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";

const WritePost = () => {
  const { state } = useLocation();

  let isLoggedIn = true;

  let edit = false;
  let oldTitle = "";

  if (state == null) {
    isLoggedIn = false;
  } else {
    console.log(state);

    edit = state.edit;

    oldTitle = state.title;
  }

  const navigate = useNavigate();

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

  const editPost = () => {
    setLoading(true);

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

    axios
      .post("https://learnify-server-mu.vercel.app/api/editPost", {
        title: oldTitle,
        newTitle: title,
        newBody: post,
      })
      .then(() => {
        setLoading(false);
        alert("Successfully Updated");
        navigate("/homescreen", { replace: true });
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong");
      });
  };

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
        navigate("/homescreen", { replace: true });
      })
      .catch((e) => {
        setLoading(false);
        console.log("Something went wrong!!");
      });

    console.log(body);
  };

  return (
    <>
      {isLoggedIn === true ? (
        loading === true ? (
          <ActivityLoader loading={loading} />
        ) : (
          <div className="write-post-parent h-full">
            <div className="write-post flex flex-row h-full ">
              <div className="write-post-title flex  flex-col h-2/3 w-1/2 mt-10 ml-10">
                <input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="write-post-body p-2 rounded-md text-white text-3xl bg-[#202021]"
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
              <div className="write-post-btn flex flex-row mt-10">
                <ReactDropdown
                  className="ml-10 h-12 bg-[#1f2833] text-white w-64 text-center rounded-md p-3 mt-5"
                  options={options}
                  onChange={(e) => {
                    setTag(e);
                  }}
                  value={tag}
                  placeholder="Select Tag"
                />

                {edit == true ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      editPost();
                    }}
                    className="ml-10 bg-[#1f2833] text-white  rounded-md p-3 mt-5 h-12"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      makePost();
                    }}
                    className="ml-10 bg-[#1f2833] text-white  rounded-md p-3 mt-5 h-12"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="text-white text-2xl">You are not logged in</div>
      )}
    </>
  );
};

export default WritePost;
