import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "80px",
          flexDirection: "row",
          background: "#1f2833",
        }}
      >
        <h4
          style={{
            color: "white",
            margin: "10px",
            //border: "2px solid white",
            width: "100%",
            textAlign: "center",
          }}
        >
          copyright 2023 Learnify,Inc All rights reserved
        </h4>
      </div>
    </>
  );
};

export default Footer;
