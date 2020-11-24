import React from 'react';
import "./Content.css";
import User from './UserInfo/UserInfo';
import Poster from './MainPoster/MainPoster';
import MyPosts from './MyPosts/MyPosts';

const Content = () => {
    return (
        <main className="content">
          <Poster />
          <User />
          <MyPosts/>
        </main>
    )
}

export default Content;