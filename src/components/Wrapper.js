// this is the "smart container"

import React, { useState, useEffect } from "react";
import Search from "./Search";
import Table from "./Table"
// import tableRows from "./TableRows"
import Header from "./Header"
import API from "../utils/API.js"


function Wrapper (props) {

//users, filteredUsers, isSorted 
const [users, setUsers] = useState([]);
const [isSorted, setIsSorted] = useState(false);
const [filtered, setFiltered] = useState([]);
const [search, setSearch] = useState("");

// GET USERS FUNCTION
// first useEffect activates the callback function when component is initially rendered
useEffect(() =>{
API().then((res)=>{
    res.json().then((data)=>{
        console.log(data)
        setUsers(data.results)
    })

})
// has an empty dependency
}, [])

// SORT FUNCTION
// this useEffect method will check if isSorted changes to execute the callback function here
//if sorted, change the look of the table
useEffect(() =>{

}, [isSorted])

// FILTER FUNCTION
useEffect(() =>{
    console.log("FILTERING!")
console.log(users.filter((user) =>{

    return user.name.first
}))
}, [filtered])

// SEARCH FUNCTION 
const searchHandler = (event) => {
    console.log()
}

// can only return one thing in a react app 
return (
  <div>
    <Header />
    <Search results={search} handleInputChange={searchHandler} />
    <Table users={users}></Table>
  </div>
);}

export default Wrapper;