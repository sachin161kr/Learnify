import React from "react";

const Trending = () => {
  return (
    <>
      <div className="sticky p-3 top-3 w-80  h-96 m-3 bg-[#202021] rounded-md">
        <div className="text-center font-bold text-md text-white mt-5">
          Trending Tags
        </div>
        <ul className="list-none text-white">
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
