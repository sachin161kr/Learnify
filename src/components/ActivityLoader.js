import React from "react";

const ActivityLoader = ({ loading }) => {
  return (
    <div
      className="text-3xl text-white py-5 text-center h-24 w-80 absolute"
      style={{
        top: "100px",
        left: "700px",
        visibility: loading == true ? "visible" : "hidden",
      }}
    >
      Loading Please Wait...
    </div>
  );
};

export default ActivityLoader;
