import React from "react";
import {
  addPostActionCreator,
  onChangePostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const updateNewPostText = (text) => {
          const action = onChangePostActionCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updateNewPostText={updateNewPostText}
            addPost={addPost}
            posts={state.profileReducer}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
