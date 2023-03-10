import React, { useState } from "react";

import axios from "axios";

import Register from "../components/Register";
import Login from "../components/Login";

import ActivityLoader from "../components/ActivityLoader";

const LoginSignup = () => {
  const [mode, setMode] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <ActivityLoader loading={loading} />
      <div className="flex flex-row content-center">
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
