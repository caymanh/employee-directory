import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <div className="search py-3">
      <input
        type="text"
        className="col-1 justify-content-center py-1"
        placeholder="Search"
        onChange={props.handleINputChange}
        value={props.search}
      ></input>
    </div>
  );
}

export default Search;
