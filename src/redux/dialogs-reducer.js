const UPDATE_NEW_DIALOG_MESSAGE = "UPDATE-NEW-DIALOG-MESSAGE",
  ADD_MESSAGE = "ADD-MESSAGE";
const initialState = {
  messagesData: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "I am fine" },
  ],

  dialogsData: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Masha" },
    { id: 3, name: "Denis" },
    { id: 4, name: "Sveta" },
  ],

  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_DIALOG_MESSAGE:
      state.newMessageText = action.newText;
      return state;
    case ADD_MESSAGE:
      let newMessage = { id: 5, message: state.newMessageText };
      state.messagesData.push(newMessage);
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
