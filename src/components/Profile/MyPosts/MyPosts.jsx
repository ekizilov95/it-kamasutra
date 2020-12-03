import React from 'react';
import './MyPosts.css';
import UserPost from './Post/Post';

const MyPosts = () => {
    return(
        <div className="posts">
            <UserPost message="Hellow, how are you?"/>
            <UserPost message="It's my first post"/>
            <UserPost message="Lorem ibso"/>
        </div>
    )
}

export default MyPosts;