// using example from React data table sandbox

import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";

import TableRows from "./TableRows"
import API from "../utils/API.js"
import "./style.css";
import BootstrapTable from 'react-bootstrap-table-next'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
//map over tablerows depending on props.users ??
function Table ({users}) {

    const [finalUsers, setFinalUsers] = useState([]);

    useEffect(()=>{
        console.clear();
        //console.log(JSON.parse(JSON.stringify(users)))
 
    
    }, [] )


 
// useEffect(()=>{
// console.log(props.users)
// let temp = props.users;
// temp = JSON.parse(JSON.stringify(temp));
// setUsers(temp)
// }, [props.users])
const columns = [
    {
        dataField: 'first',
        text: 'Name',
        sort: true
      },
    {
    dataField: 'phone',
    text: 'Phone',
    sort: true
  }, {
    dataField: 'email',
    text: 'Email',
    sort: true
  }];
  
 


    return (
        <div  >
        <BootstrapTable
  bootstrap4
  keyField="id"
  data={ users }
  columns={ columns }
  
/>
            </div>
    );
    }
      
  export default Table;
