import React from "react";

const Profile = () => {
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    // <>
    <div className="m-4 w-1/4 h-96 flex flex-col rounded-lg bg-white sticky top-3 border-2 border-black">
      <div className="h-72 mt-3 p-3 ml-3">
        <div className="text-lg font-bold">Good Afternoon !! Sachin</div>
        <div className="mt-3">
          <div>Current Level : ⭐⭐</div>
          <div>Contribution : +3</div>
          <div>Total Articles Read : 15</div>
          <div>Reading Time : 132 min</div>
        </div>
      </div>
      <button
        className="h-8 mt-3 rounded-md w-24 self-center border-2 border-black "
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
