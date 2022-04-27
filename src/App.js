import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './page/home'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
