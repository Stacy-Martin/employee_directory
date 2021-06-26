import React from "react";

function Search({ setSearch }) {


  let handleSearch = (e) =>{
    let value  = e.target.value
// console.log(e.target.value)
setSearch(value)
  }

  return (

    <>
    <input
        className="form-inline empSearch"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleSearch}
      />
 
    </>
 
  );
}

export default Search;