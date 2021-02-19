import React from "react";
import Preloader from "../common/preloader/Preloader";
import classes from "./Profile.module.css";

export default function ProfileInfo(props) {
  return props.profile ? (
    <div>
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
            src={props.profile.photos.large}
            alt=""
          />
        </div>
        <div className={classes.info}>
          <div className={classes.name}>Name: {props.profile.fullName}</div>
          <div className={classes.name}>About: {props.profile.aboutMe}</div>
          <div className={classes.born}>
            {props.profile.lookingForAJob ? "Ищу работу" : "Не ищу работу"}
          </div>
          <div className={classes.tel}>
            Контакты: {props.profile.contacts.facebook}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Preloader />
  );
}
