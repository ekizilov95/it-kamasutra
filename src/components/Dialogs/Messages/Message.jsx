import React from "react";
import "../Dialogs.css";

const Message = (props) => {
  return (
    <div className="dialog__message" key={props.message.id}>
      <p>{props.message}</p>
    </div>
  );
};
export default Message;
