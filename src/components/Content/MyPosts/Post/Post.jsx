import React from "react";
import post from './Post.module.css';

const UserPost = (props) => {
    return (
        <div className={post.user}>
            <div className={post.user__img}>
                <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="user"/>
            </div>
            <div className={post.user__post}>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default UserPost;