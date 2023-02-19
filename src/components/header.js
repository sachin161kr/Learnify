import React, { useState } from "react";

import SearchBar from "./searchBar";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            //marginLeft: "10px",
            fontStyle: "italic",
            color: "#66fcf1",
            fontSize: "30px",
          }}
        >
          Learnify
        </h1>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "30px",
            marginTop: "10px",
          }}
        >
          <h3
            style={{
              marginRight: "20px",
              color: "white",
              fontSize: "15px",
            }}
          >
            About Us
          </h3>
          <h3
            style={{
              color: "white",
              fontSize: "15px",
            }}
          >
            Contact
          </h3>
        </div>
      </div>
    </>
  );
};

export default Header;
