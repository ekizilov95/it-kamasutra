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
    case UPDATE_NEW_DIALOG_MESSAGE: {
      return {
        ...state,
        newMessageText: action.newText,
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 6, message: state.newMessageText },
        ],
        newMessageText: "",
      };
    }
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
