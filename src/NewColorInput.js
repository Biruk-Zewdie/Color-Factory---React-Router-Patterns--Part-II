import React, { useState } from "react";
import "./NewColorInputForm.css"
import { useNavigate } from "react-router-dom"

const NewColorInput = ({ addColor }) => {
    const initialState = { colorName: "", colorValue: "" }
    const [formData, setFormData] = useState(initialState)
    const redirect = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(formData => ({ ...formData, [name]: value }))

    }

    const handleSubmit = (event) => {
        event.preventDefault()

        addColor({ ...formData })

        setFormData(initialState)
        redirect("/colors")

    }

    return (
        <div className="inputForm-container">
            <form onSubmit={handleSubmit}>
                <div className="colorName">
                    <label htmlFor="colorName">Color name  </label>
                    <input
                        type="text"
                        name="colorName"
                        id="colorName"
                        placeholder="Enter the Name of Color"
                        onChange={handleChange}
                        value={formData.colorName}
                    />
                </div>
                <div className="colorPicker">
                    <label htmlFor="colorPicker">Select a Color  </label>
                    <input
                        type="color"
                        name="colorPicker"
                        id="colorPicker"
                        onChange={handleChange}
                        value={formData.colorPicker}
                    />
                </div>

                <button>Add Color</button>
            </form>
        </div>
    )
}

export default NewColorInput;