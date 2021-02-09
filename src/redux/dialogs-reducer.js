const UPDATE_NEW_DIALOG_MESSAGE = "UPDATE-NEW-DIALOG-MESSAGE",
  ADD_MESSAGE = "ADD-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_DIALOG_MESSAGE:
      state.newMessageText = action.newText;
      return state;
    case ADD_MESSAGE:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const onChangeDialogMessageActionCreactor = (text) => ({
  type: UPDATE_NEW_DIALOG_MESSAGE,
  newText: text,
});

export default dialogsReducer;
