import profileReducer from "./profile-reducer";
import dilogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hellow, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first message?", likesCount: 5 },
        {
          id: 3,
          message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ea!",
          likesCount: 7,
        },
      ],
      newPostText: "it-kamasutra",
    },

    dialogsPage: {
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
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dilogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
