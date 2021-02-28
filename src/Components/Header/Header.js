import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header py-5">
      <h1 className="text-white fs-1">Employee Directory</h1>
      <p className="text-white">
        Click on the 'Age' column to sort by age or use the search box to filter by name and narrow
        your results.
      </p>
    </div>
  );
}

export default Header;
