import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";

const renderEntireTree = (state) => {
  ReactDOM.render(
    <App appState={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};
renderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
