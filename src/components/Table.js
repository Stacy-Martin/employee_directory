// using example from React data table sandbox

import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";

import TableRows from "./TableRows"
import API from "../utils/API.js"
import "./style.css";

//map over tablerows depending on props.users ??
// function Table (props) {  ????
    
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

function App() {
    return (
        <div className="App">
        <Card>
            <DataTable
            title="Employee Directory"
            columns={columns}
            // insert tableRows here ?? TableRows......
            rows={TableRows}
            data={API.fetchEmpData}
            defaultSortFieldId={1}
            sortIcon={<SortIcon />}
            pagination
            selectableRows
            />
        </Card>
        </div>
    );
    }
      
  const rootElement = document.getElementById("root");

  ReactDOM.render(<App />, rootElement);

//   export default Table;
