import React, { useState, useEffect } from "react";

function TableRows (props) {


    return(

        <tr key={props.user.email}>
        <td><img alt="" src={props.user.picture.thumbnail}></img></td>
        <td>{props.user.name.first + " " + props.user.name.last}</td>
        <td>{props.user.email}</td>
        <td>{props.user.nat}</td>
        </tr>
    )

}



export default TableRows;