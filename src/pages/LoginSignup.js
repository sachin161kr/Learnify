import React, { useState } from "react";

import axios from "axios";

import "../App.css";

const LoginSignup = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [toggle, setToogle] = useState(false);
  const [toggle2, setToogle2] = useState(false);

  const handleRegister = () => {
    if (password !== confirmpassword) {
      alert("Confirmed Password is not same");
      return;
    }

    if (password.length < 8) {
      alert("Password length should atleast be 8");
      return;
    }

    const body = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post("https://learnify-server-mu.vercel.app/api/register", body)
      .then(function (res) {
        console.log(res.data);
        if (res.data.status === "error") {
          alert(res.data.error + ", Registration Failed");
        } else {
          alert("Registration Success");
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Registration Failed");
      });
  };

  const handleLogin = () => {
    if (password.length < 8) {
      alert("Please enter a valid password");
      return;
    }

    const body = {
      email: email,
      password: password,
    };

    axios
      .post("https://learnify-server-mu.vercel.app/api/login", body)
      .then(function (res) {
        console.log(res.data);
        if (res.data.status === "error") {
          alert("Login Failed");
        } else {
          alert("Login Success");
          window.location.href = "/homescreen";
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Login Failed");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        height: "85vh",
        maxWidth: "100%",
        backgroundImage:
          "linear-gradient(259deg, rgb(12 228 235 / 83%), rgb(217 87 156 / 54%))",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "30px",
          // background: "yellow",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginTop: "80px" }}>REGISTER</h1>
        <input
          className="input_login"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="input_login"
          placeholder="Email"
          type={"email"}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="input_login"
          placeholder="Password"
          type={"password"}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="input_login"
          placeholder="Confirm Password"
          type={"password"}
          required
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button
          style={{
            backgroundColor: toggle === false ? "#1f2833" : "red",
            color: "white",
          }}
          onMouseEnter={() => {
            setToogle(!toggle);
          }}
          onMouseLeave={() => {
            setToogle(!toggle);
          }}
          onClick={(e) => {
            e.preventDefault();
            handleRegister();
            //console.log(name, email, password);
          }}
          className="login_btn"
        >
          Join Us!
        </button>
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
          // background: "red",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginTop: "80px" }}>LOGIN</h1>
        <input
          className="input_login"
          placeholder="Email"
          type={"email"}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="input_login"
          placeholder="Password"
          type={"password"}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          style={{
            backgroundColor: toggle2 === false ? "#1f2833" : "red",
            color: "white",
          }}
          onMouseEnter={() => {
            setToogle2(!toggle2);
          }}
          onMouseLeave={() => {
            setToogle2(!toggle2);
          }}
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="login_btn"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default LoginSignup;
