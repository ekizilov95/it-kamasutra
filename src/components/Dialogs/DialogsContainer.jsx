import React from "react";
import { connect } from "react-redux";
import {
  onChangeDialogMessageActionCreactor,
  addMessageActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    dialogsPage: state.dialogsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateDialogMessage: (text) => {
      dispatch(onChangeDialogMessageActionCreactor(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
