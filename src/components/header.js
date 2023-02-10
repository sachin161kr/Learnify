import React from "react";

import styles from "./styles";

import "../App.css";

const Header = () => {
  return (
    <>
      <div style={styles.header}>
        <h1
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            //marginLeft: "10px",
            fontStyle: "italic",
            color: "#66fcf1",
          }}
        >
          Learnify
        </h1>
        <div
          style={{
            flexGrow: 1,
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "3px",
            marginRight: "30px",
          }}
        >
          <h3
            style={{
              marginRight: "20px",
              color: "#66fcf1",
            }}
          >
            About Us
          </h3>
          <h3
            style={{
              color: "#66fcf1",
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
