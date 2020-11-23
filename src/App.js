import React from 'react';
import './App.css';
import Header from "./components/Header"
import Menu from "./components/Navbar"
import Content from "./components/Content"

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header/>
        <Menu/>
        <Content/>  
      </div>
    </div>
  );
}

export default App;
