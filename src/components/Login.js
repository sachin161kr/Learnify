import React, { useState } from "react";

import axios from "axios";

const Login = ({ mode, setMode, setLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          setLoading(false);
          alert("Login Failed");
        } else {
          setLoading(false);
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
    <form className="flex flex-col w-1/4 border-black m-12 content-center">
      <h1 className="mt-5 font-bold self-center text-xl">Login</h1>
      <input
        className="h-5 w-72 border-4 self-center rounded-lg p-5 m-2"
        placeholder="Email"
        type={"email"}
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="h-5 w-72 border-4 self-center rounded-lg p-5 m-2"
        placeholder="Password"
        type={"password"}
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setLoading(true);
          handleLogin();
          //console.log(name, email, password);
        }}
        className="h-12 w-72  text-white border-2 rounded-lg bg-[#1f2833] self-center mt-5"
      >
        Login
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setMode(!mode);
          //console.log(name, email, password);
        }}
        className="h-12 w-72 shadow-white border-2 rounded-lg bg-white self-center mt-5"
      >
        Register
      </button>
    </form>
  );
};

export default Login;
