const ADD_POST = "ADD-POST",
  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
  SET_USER_PROFILE = "SET-USER-PROFILE";

const initialState = {
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
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: 6,
            message: state.newPostText,
            likesCount: 7,
          },
        ],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setProfileActionCreator = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const onChangePostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
