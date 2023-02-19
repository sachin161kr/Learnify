import React from "react";

import avatar from "../assets/avatar.png";

const Post = () => {
  return (
    <div className="blogs">
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "50vh",
        width: "100%",
        // marginLeft:"auto",
        // marginRight:"auto",
        background: "white",
        borderBottom : "2px solid  #acacab4d"
        // border: 2px solid  #acacab4d;
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
              height: "150px",
              width: "auto",
              backgroundColor : "wheat",
            }}
          >
            Hello hwyy what are u doing
          </div>
          <div style={{ fontSize: "12px" , margin: "10px" }}>Read more...</div>
        </div>
      </div>
      <div
        style={{
          height: "60%",
          width: "30%",
          background: "grey",
          borderRadius : "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto 20px auto 20px",
        }}
      >
        Image
      </div>
    </div>
    </div>
  );
};

export default Post;
