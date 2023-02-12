import React from "react";

import "../App.css";

const LoginSignup = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "30px",
        }}
      >
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <input placeholder="Confirm Password" />
        <button>Register</button>
      </form>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "30px",
        }}
      >
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginSignup;
