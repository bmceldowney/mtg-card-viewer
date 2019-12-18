import React from "react";
import { SearchBox, SortButton } from "../";
import "./Header.css";

// TODO: Add theme chooser UI
function Header({
  props: { title, loadingFromApi, currentSearchCriteria },
  setSearchCriteria,
  changeSort
}) {
  const loadingClassName = loadingFromApi ? "loading" : "";

  return (
    <div className={`header ${loadingClassName}`}>
      <span>{title}</span>
      <span className="widgets">
        <SearchBox
          props={{ loadingFromApi, currentSearchCriteria }}
          setSearchCriteria={setSearchCriteria}
        ></SearchBox>
        <SortButton
          props={{ loadingFromApi }}
          changeSort={changeSort}
        ></SortButton>
        <span className="loading-indicator">
          <div></div>
        </span>
      </span>
    </div>
  );
}
console.log("Header imported!");
export default Header;
