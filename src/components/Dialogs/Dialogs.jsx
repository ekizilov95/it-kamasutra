import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = ({ state }) => {
  return (
    <div className="dialogs">
      <div className="dialogs__inner">
        {state.dialogsData.map((el) => (
          <DialogItem name={el.name} id={el.id} />
        ))}
      </div>
      <div className="dialogs__messages">
        {state.messagesData.map((item) => (
          <Message message={item.message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
