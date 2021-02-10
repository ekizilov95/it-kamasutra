import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Route exact path="/profile" render={() => <Profile />} />
            <Route exact path="/dialogs" render={() => <DialogsContainer />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
