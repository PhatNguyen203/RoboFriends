import React from "react";

const SearchBox = (props) => {
  return (
    <div
      style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}
    >
      {props.children}
    </div>
  );
};
export default SearchBox;
