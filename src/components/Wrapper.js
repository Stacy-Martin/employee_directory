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
const [filtered, setFiltered] = useState([]);
const [search, setSearch] = useState("");

// GET USERS FUNCTION
// first useEffect activates the callback function when component is initially rendered
useEffect(() =>{
API().then((res)=>{
    res.json().then((data)=>{
        console.log(data)
        setUsers(data.results)
        setFiltered(data.results)
    })

})
// has an empty dependency
}, [])

 

// FILTER FUNCTION
// useEffect(() =>{
//     console.log("FILTERING!")
// console.log(users.filter((user) =>{

//     return user.name.first
// }))
// }, [filtered])



// SEARCH FUNCTION 
const searchHandler = (searchString) => {

// console.log(searchString)

setSearch(searchString)

let filtered = users.filter(({phone, email}) =>{
  return  (  phone.includes(searchString) ||
  email.includes(searchString))
})

console.log("filtered", filtered)

setFiltered(filtered)


}
//     console.log()
//     // TODO: change EmployeeData to whatever I have it called 
//     const stringifyArray = EmployeeData.map((item)=>{
//         return JSON.stringify.item
//     })
//     const result = stringifyArray.filter(data => data.includes(searchString));
//     setFiltered(result)
// }

// can only return one thing in a react app 
return (
  <div>
    <Header />
    <Search  setSearch={searchHandler} />
    <Table users={filtered}></Table>


  </div>
);}

export default Wrapper;