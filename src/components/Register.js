import React, { useState } from "react";

import axios from "axios";

const Register = ({ mode, setMode, setLoading }) => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmpassword) {
      alert("Confirmed Password is not same");
      return;
    }

    if (password.length < 8) {
      alert("Password length should atleast be 8");
      return;
    }

    // bcrypt.hashSync(password, 3, (err, hash) => {
    //   console.log(hash);
    // });

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
          setLoading(false);
          alert(res.data.error + ", Registration Failed");
        } else {
          setLoading(false);
          setMode(!mode);
          alert("Registration Success");
        }
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
        alert("Registration Failed");
      });
  };

  return (
    <form className="flex flex-col w-1/4 border-black m-12 content-center">
      <h1 className="mt-5 font-bold self-center text-xl">REGISTER</h1>
      <input
        className="h-5 w-72 border-4  self-center rounded-lg p-5 m-2"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
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
      <input
        className="h-5 w-72 border-4 self-center rounded-lg p-5 m-2"
        placeholder="Confirm Password"
        type={"password"}
        required
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setLoading(true);
          handleRegister();
          //console.log(name, email, password);
        }}
        className="h-12 w-72 bg-[#1f2833] shadow-white border-2 rounded-lg text-white self-center mt-5"
      >
        Join Us!
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setMode(!mode);
          //console.log(name, email, password);
        }}
        className="h-12 w-72 shadow-white border-2 rounded-lg bg-white self-center mt-5"
      >
        Login
      </button>
    </form>
  );
};

export default Register;
