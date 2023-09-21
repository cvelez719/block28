import { _useState } from 'react'
import './index.css'
import { _createRoot } from 'react-dom/client'
import {  Routes, Route, Link } from "react-router-dom";
import _Blue from './components/blue';
import _Red from './components/red';
import _home from './components/home';


function App() {


  return (
    <>
      <div id="container">
        <h1></h1>
        <div id="navbar">
          <Link to="Blue">Blue</Link>
          <Link to="Red">Red</Link> 
          <Link to="Home">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<h1>Blue</h1>}/>
            <Route path="/red" element={<h1>Red</h1>}/>
            <Route path="/home" element={<h1>Home</h1>}/>
          </Routes>
          </div>
      </div>

    </>
  )
}

export default App
