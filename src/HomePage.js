import React from "react";
import "./HomePage.css"

import Color from "./Color";
import { Link } from "react-router-dom"

const HomePage = ({ colors }) => {

    return (
        <div>
            <div className="homePage-header">
                <h1>Welcome to Color Factory</h1>
                <Link to="/colors/new">Add New Color</Link>
            </div>
            <h4>Please select a color</h4>
            {colors.map(({ colorName, colorPicker, id }) =>
                <Color
                    colorName={colorName}
                    colorPicker={colorPicker}
                    key={id}
                />)}

        </div>
    )

}

export default HomePage;