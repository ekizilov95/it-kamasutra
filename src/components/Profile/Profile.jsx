import React from "react";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ poriflePage, dispatch }) => {
  return (
    <div className={classes.profile}>
      <div className={classes.poster}>
        <img
          src="https://avatanplus.com/files/resources/original/5ada2966d530f162e431b9d9.jpg"
          alt=""
        />
      </div>
      <div className={classes.user}>
        <div className={classes.avatar}>
          <img
            className={classes.avatar}
            src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png"
            alt=""
          />
        </div>
        <div className={classes.info}>
          <div className={classes.name}>John</div>
          <div className={classes.born}>Ukraine</div>
          <div className={classes.tel}>+38095326622</div>
        </div>
      </div>
      <MyPostsContainer posts={poriflePage} dispatch={dispatch} />
    </div>
  );
};

export default Profile;
