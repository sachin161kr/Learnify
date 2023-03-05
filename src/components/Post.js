import React from "react";

import avatar from "../assets/avatar.png";

const Post = () => {
  return (
    <div className="flex flex-row h-96 w-full bg-[#202021] mt-4 rounded-md ">
      <div className="grow">
        <div className="flex flex-row m-5">
          <div>
            <div className="text-white">MorningStar_</div>
            <div className="text-white text-md">10 min ago</div>
          </div>
        </div>
        <div className="m-5">
          <div className="text-white">How To Start with React?</div>
          <div className="text-sm text-white">3 min Read</div>
        </div>
        <div className="m-5">
          <div className="h-36 text-white border-2 rounded-lg border-[#646466] p-2">
            Hello hwyy what are u doing
          </div>
          <div className="mt-1 text-sm text-white">Read more...</div>
        </div>
      </div>
      {/* <div
        style={{
          height: "60%",
          width: "30%",
          background: "grey",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto 20px auto 20px",
        }}
      >
        Image
      </div> */}
    </div>
  );
};

export default Post;
