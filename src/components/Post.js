import React, { useState, useEffect } from "react";
const Post = ({ allPosts }) => {
  return (
    <div className="post-parent">
      {allPosts.map((e) => (
        <div className="flex flex-row w-full bg-[#202021] mt-4 rounded-md ">
          <div className="grow">
            <div className="flex flex-row m-5">
              <div>
                <div className="text-white text-md ">{e.username}</div>
                <div className="text-white text-sm">10 min ago</div>
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
