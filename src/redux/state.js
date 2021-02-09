const ADD_POST = "ADD-POST",
  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const onChangePostActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default store;
