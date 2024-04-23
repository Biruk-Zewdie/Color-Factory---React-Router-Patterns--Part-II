import React, { useEffect } from "react";
import "./PaintedPage.css"
import { Link, useParams, useNavigate } from "react-router-dom"

const PaintedPage = ({colors}) => {
    const {colorName} = useParams ()
    const navigate = useNavigate()

    useEffect (() => {
        const colorExists = colors.some((color) => color.colorName === colorName);
        if (!colorExists){
            navigate ("/colors")
        }

    }, [colors, colorName, navigate])
    
    return (
        <div className="paintedPage" style={{ "--colorName": colorName }}>
            <h1>THIS IS {colorName.toLocaleUpperCase()}</h1>
            <h1>ISN'T IT BEAUTIFUL?</h1>
            <Link to="/colors" >Go Back</Link>

        </div>
    )

}

export default PaintedPage;