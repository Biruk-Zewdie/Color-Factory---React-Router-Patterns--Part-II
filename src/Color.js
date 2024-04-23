import React from "react";
import "./Color.css"
import {Link} from "react-router-dom"


const Color = ({colorName}) => {

    return (
        <ul className="Color-list">
            <li><Link to = {`/colors/${colorName}`} >{colorName}</Link></li>
        </ul>
    )

}

export default Color; 