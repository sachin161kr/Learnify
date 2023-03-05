import React, { useState } from "react";

import SearchBar from "./searchBar";

const Header = () => {
  return (
    <>
      <div className="bg-[#1f2833] h-12 w-full flex flex-row]">
        <div className="text-white ml-3 mt-2 text-xl italic">Learnify</div>
        <div className="grow flex justify-center"></div>
        <div className="mr-3">
          <ul className="list-none">
            <li className="text-white inline-block m-3">Contact</li>
            <li className="text-white inline-block m-3">About</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
