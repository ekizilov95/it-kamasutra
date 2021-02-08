import React from "react";
import { NavLink } from "react-router-dom";
import "../Dialogs.css";

const DialogItem = ({ name, id }) => {
  return (
    <div className="dialogs__item">
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
