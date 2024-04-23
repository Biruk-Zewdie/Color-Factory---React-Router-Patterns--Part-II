
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import HomePage from './HomePage';
import NewColorInput from './NewColorInput';
import PaintedPage from './PaintedPage';

const getLocalStorage = () => {
  let storedColors = localStorage.getItem("colors")
  if (storedColors){
    return (storedColors = JSON.parse (storedColors))
  }else {
    return []
  }
}

function App() {
  const [colors, setColors] = useState(getLocalStorage())
 

  const addColor = (newColor) => {
    setColors(colors => [...colors, { ...newColor, id: uuidv4() }])

    // localStorage.setItem ("colors", JSON.stringify(colors))
  }

//   useEffect(() => {
//     const storedColors = localStorage.getItem ("colors")
//     if (storedColors){
//       setColors(JSON.parse(storedColors))
//     }

// }, [])

  useEffect (() => {
    localStorage.setItem ("colors", JSON.stringify(colors))
  }, [colors])


  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="colors" />} />
          <Route path="/colors" element={<HomePage  colors = {colors}/>} />
          <Route path="colors/new" element={<NewColorInput addColor={addColor}/>} />
          <Route path="/colors/:colorName" element={<PaintedPage colors = {colors}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
