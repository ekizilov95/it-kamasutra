import React from "react";
import {
  onChangeDialogMessageActionCreactor,
  addMessageActionCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        const updateDialogMessage = (text) => {
          store.dispatch(onChangeDialogMessageActionCreactor(text));
        };

        const addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
        return (
          <Dialogs
            state={state.dialogsReducer}
            addMessage={addMessage}
            updateDialogMessage={updateDialogMessage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
