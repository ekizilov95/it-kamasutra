import React from "react";
import "./users.css";

export default function Users({ usersPage, followed }) {
  return (
    <div className="users">
      <div className="users__inner">
        {usersPage.map((user) => {
          return (
            <div key={user.id} className="users__item">
              <div className="users__column">
                <div className="users__img">
                  <img src={user.photoUrl} alt="user" />
                </div>
                <button
                  onClick={() => followed(user.id)}
                  className={`users__btn ${
                    user.followed ? "" : "users__btn_active"
                  }`}
                >
                  {user.followed ? "Follow" : "Unfollow"}
                </button>
              </div>

              <div className="users__descr">
                <div className="user__name">{user.userName}</div>
                <div className="user__status">{user.status}</div>
              </div>
              <div className="users__locations">
                <div className="users__county">{user.location.country}</div>
                <div className="users__city">{user.location.city}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
