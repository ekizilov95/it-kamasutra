import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App({ appState, dispatch }) {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Route
              exact
              path="/profile"
              render={() => (
                <Profile
                  poriflePage={appState.profilePage}
                  dispatch={dispatch}
                />
              )}
            />
            <Route
              exact
              path="/dialogs"
              render={() => <Dialogs state={appState.dialogsPage} />}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
