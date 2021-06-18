import React from "react";

function Search({ search, setSearch }) {
  return (
    <form className="bg-light justify-content-between">
      <input
        className="form-inline empSearch"
        type="search"
        placeholder="Search"
        aria-label="Search"
        // results, name or value here ??
        results={search}
        // on click ?? or what here ??
        onChange={e => setSearch(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">Search</button>
      {/* button type supposed to be button or submit? */}
    </form>
  );
}

export default Search;