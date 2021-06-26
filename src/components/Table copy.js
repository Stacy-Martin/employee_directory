// using example from React data table sandbox

import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";

import TableRows from "./TableRows"
import API from "../utils/API.js"
import "./style.css";

//map over tablerows depending on props.users ??
function Table (props) {
const [users, setUsers] = useState("");
useEffect(()=>{
console.log(props.users)
let temp = props.users;
temp = JSON.parse(JSON.stringify(temp));
setUsers(temp)
}, [props.users])
const columns = [
    {
        name: "Picture",
        selector: "picture",
        sortable: false,
    },
    {
        name: "Name",
        selector: "name",
        sortable: true,
    },
    {
        name: "email",
        selector: "email",
        sortable: false,  },
    {
        name: "Phone Number",
        selector: "phone",
        sortable: false,
    },
    {
        name: "Nationality",
        selector: "nat",
        sortable: true,
    },
    ];


    return (
        <div className="App">
        <Card>
            <table>
        <tr>
            <th scope="col">
                Image
            </th>
            <th scope="col">
                Name
            </th>
            <th scope="col">
                Email
            </th>
            <th scope="col">
              Nationality
            </th>
            </tr>
            {users ?          
            users.map((user) =>{return <TableRows user={user}></TableRows>})
             :
            ( 
          <></>
                    
            )}
            </table>
            </Card>
            </div>
    );
    }
      
  export default Table;
