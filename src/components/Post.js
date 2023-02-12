import React from "react";

import avatar from "../assets/avatar.png";

const Post = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "280px",
        width: "650px",
        margin: "20px",
        background: "yellow",
      }}
    >
      <div
        style={{
          flexGrow: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "20px",
          }}
        >
          <img
            alt="Profile Pic"
            src={avatar}
            height="20px"
            width="20px"
            style={{
              marginRight: "20px",
              marginTop: "10px",
            }}
          />
          <div>
            <div>MorningStar_</div>
            <div style={{ fontSize: "12px" }}>10 min ago</div>
          </div>
        </div>
        <div style={{ margin: "20px" }}>
          <div>How To Start with React?</div>
          <div style={{ fontSize: "12px" }}>3 min Read</div>
        </div>
        <div style={{ margin: "20px" }}>
          <div
            style={{
              height: "120px",
              width: "400px",
              background: "green",
            }}
          >
            Hello hwyy what are u doing
          </div>
          <div style={{ fontSize: "12px" }}>Read more...</div>
        </div>
      </div>
      <div
        style={{
          marginTop: "40px",
          height: "200px",
          width: "200px",
          background: "red",
          marginRight: "20px",
        }}
      >
        Image
      </div>
    </div>
  );
};

export default Post;
