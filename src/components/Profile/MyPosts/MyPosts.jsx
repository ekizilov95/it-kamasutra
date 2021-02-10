import React from "react";
import "./MyPosts.css";
import UserPost from "./Post/Post";

const MyPosts = ({ posts, updateNewPostText, addPost }) => {
  let newPostElement = React.createRef();

  const addNewPost = () => {
    addPost();
  };

  const onChangePost = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
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
