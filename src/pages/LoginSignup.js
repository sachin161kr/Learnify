import React, { useState } from "react";

import axios from "axios";

import Register from "../components/Register";
import Login from "../components/Login";

const LoginSignup = () => {
  const [mode, setMode] = useState(false);

  const [loading, setLoading] = useState(false);

  return (
    <>
      <div
        className="text-3xl py-5 text-center h-24 w-80 absolute"
        style={{
          top: "100px",
          left: "700px",
          visibility: loading == true ? "visible" : "hidden",
        }}
      >
        Loading Please Wait...
      </div>
      <div className="flex flex-row h-full w-full content-center">
        {mode == true ? (
          <Register mode={mode} setMode={setMode} setLoading={setLoading} />
        ) : (
          <Login mode={mode} setMode={setMode} setLoading={setLoading} />
        )}
      </div>
    </>
  );
};

export default LoginSignup;
