import React from "react";

const SearchBar = ({ searchPost, setKeyword, getAllPosts, keyword }) => {
  return (
    <div className="flex flex-row">
      <input
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        className="grow bg-[#1f2833] self-center rounded-xl text-white p-3 h-10"
        type="text"
        placeholder="Search for Tags , Articles and More"
      />
      <button
        onClick={keyword.length === 0 ? getAllPosts : searchPost}
        className="text-white h-8 mt-3 bg-[#1f2833] ml-2 mb-4 text-white rounded-md w-24 self-center p-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
