import React from "react";

const Profile = () => {
  return (
    <>
      <div
        style={{
          marginTop: "10px",
          width: "460px",
          height: "400px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ flexGrow: 1, marginTop: "10px", marginLeft: "10px" }}>
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
            Good Afternoon !! Sachin
          </div>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <div>Current Level : ⭐⭐</div>
            <div>Contribution : +3</div>
            <div>Total Articles Read : 15</div>
            <div>Reading Time : 132 min</div>
          </div>
        </div>
        <div
          style={{
            height: "120px",
            width: "120px",
            background: "pink",
            borderRadius: "100%",
            margin: "20px",
          }}
        ></div>
      </div>
    </>
  );
};

export default Profile;
