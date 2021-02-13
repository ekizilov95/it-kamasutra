import React from "react";
import post from "./Post.module.css";

const UserPost = ({ message }) => {
  return (
    <div className={post.user}>
      <div className={post.image}>
        <img
          src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png"
          alt="user"
        />
      </div>
      <div className={post.text}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default UserPost;
