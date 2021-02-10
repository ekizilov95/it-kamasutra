import React from "react";
import {
  onChangeDialogMessageActionCreactor,
  addMessageActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ state, dispatch }) => {
  const updateDialogMessage = (text) => {
    dispatch(onChangeDialogMessageActionCreactor(text));
  };

  const addMessage = () => {
    dispatch(addMessageActionCreator());
  };

  return (
    <Dialogs
      state={state}
      addMessage={addMessage}
      updateDialogMessage={updateDialogMessage}
    />
  );
};

export default DialogsContainer;
