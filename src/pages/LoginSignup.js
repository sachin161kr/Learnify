import React from "react";

import "../App.css";

const LoginSignup = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        height: "85vh",
        maxWidth: "100%",
        background: "grey"
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "30px",
          background: "yellow",
          alignItems: "center"
          
        }}
      >
        <h1 style={{marginTop:"80px"}}>REGISTER</h1>
        <input className="input_login" placeholder="Name" type={"text"} />
        <input className="input_login" placeholder="Email" type={"email"} required/>
        <input className="input_login" placeholder="Password" type={"password"}  required/>
        <input className="input_login" placeholder="Confirm Password" type={"password"} required/>
        <button className="login_btn">Register</button>
      </form>
      <div className="login_or">
        <h2>OR</h2>
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "30px",
          background: "red",
          alignItems: "center"
        }}
      >
        <h1 style={{marginTop:"80px"}}>LOGIN</h1>
        <input className="input_login" placeholder="Email" type={"email"} required/>
        <input className="input_login" placeholder="Password" type={"password"}  required/>
        <button className="login_btn">Login</button>
      </form>
    </div>
  );
};

export default LoginSignup;
