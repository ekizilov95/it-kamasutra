import React from "react";
import {
  addPostActionCreator,
  onChangePostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profileReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(onChangePostActionCreator(text));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default PostsContainer;
