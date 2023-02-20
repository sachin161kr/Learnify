import React from "react";

const SearchBar = ({ locationName }) => {
  return (
    <>
      {locationName != "login" ? (
        <input
          className="search"
          type="text"
          placeholder="Search for Tags , Articles and More"
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchBar;
