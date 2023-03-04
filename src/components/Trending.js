import React from "react";

const Trending = () => {
  return (
    <>
      <div className="sticky p-3 top-3 w-80 bg-white h-96 m-3 border-2 border-black rounded-md">
        <div className="text-center font-bold text-md mt-5">Trending Tags</div>
        <ul className="list-none">
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
