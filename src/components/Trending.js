import React from "react";

const Trending = () => {
  return (
    <>
      <div className="tags">
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          Trending Tags
        </div>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          <li>C++</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>Competitive Programming</li>
        </ul>
      </div>
    </>
  );
};

export default Trending;
