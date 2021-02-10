import React from "react";
import {
  addPostActionCreator,
  onChangePostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ posts, dispatch }) => {
  const addPost = () => {
    dispatch(addPostActionCreator());
  };

  const updateNewPostText = (text) => {
    const action = onChangePostActionCreator(text);
    dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={updateNewPostText}
      addPost={addPost}
      posts={posts}
    />
  );
};

export default MyPostsContainer;
