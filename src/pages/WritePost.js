import React, { useState } from "react";
import ReactDropdown from "react-dropdown";

const WritePost = () => {
  const [title, setTitle] = useState("");

  const [post, setPost] = useState("");

  const [tag, setTag] = useState(null);

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
    console.log(title, post, tag.value);
  };

  return (
    <>
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
    </>
  );
};

export default WritePost;
