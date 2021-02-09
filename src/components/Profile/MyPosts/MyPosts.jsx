import React from "react";
import "./MyPosts.css";
import UserPost from "./Post/Post";
import {
  addPostActionCreator,
  onChangePostActionCreator,
} from "../../../redux/profile-reducer";

const MyPosts = ({ posts, dispatch }) => {
  let newPostElement = React.createRef();

  const addNewPost = () => {
    dispatch(addPostActionCreator());
  };

  const onChangePost = () => {
    let text = newPostElement.current.value;
    dispatch(onChangePostActionCreator(text));
  };

  return (
    <div>
      <div className="posts__form">
        <textarea
          ref={newPostElement}
          onChange={onChangePost}
          className="posts__textarea"
          name="messages"
          cols="30"
          rows="10"
          value={posts.newPostText}
        ></textarea>
        <button onClick={addNewPost} className="posts__btn">
          Add Post
        </button>
      </div>
      <div className="posts">
        {posts.postData.map((p) => (
          <UserPost key={p.id} message={p.message} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
