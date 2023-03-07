import React from "react";

const Profile = () => {
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    // <>
    <div className="profile-class m-4 w-1/4 h-96 flex flex-col rounded-lg bg-[#202021] sticky top-3">
      <div className="h-60 mt-3 p-3 ml-3">
        <div className="text-lg text-white font-bold">Hey {username}</div>
        <div className="mt-3">
          <div className="text-white">Current Level : ⭐⭐</div>
          <div className="text-white">Contribution : +3</div>
          <div className="text-white">Total Articles Read : 15</div>
          <div className="text-white">Reading Time : 132 min</div>
        </div>
      </div>
      <button
        className="text-white h-8 mt-3 bg-[#1f2833] text-white rounded-md w-24 self-center p-2"
        onClick={() => {
          window.location.href = "/writepost";
        }}
      >
        Write Post
      </button>
      <button
        className="text-white h-8 mt-3 bg-[#1f2833] text-white rounded-md w-24 self-center p-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
