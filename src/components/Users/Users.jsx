import React from "react";
import { NavLink } from "react-router-dom";
import "./users.css";
import userPhoto from "../../assets/images/user.png";
import * as axios from "axios";

export default function Users({
  usersPage,
  totalCountUsers,
  pageSize,
  currentPage,
  followed,
  onChangePage,
}) {
  let pages = [],
    showPages = [],
    changedListPages = [],
    quantityPages = Math.ceil(totalCountUsers / pageSize);

  for (let i = 1; i <= quantityPages; ++i) {
    pages.push(i);
  }

  if (currentPage <= 3) {
    changedListPages = pages.slice(0, 5);
    showPages = [...changedListPages, "...", pages.length];
  } else if (currentPage >= pages.length - 2) {
    changedListPages = pages.slice(pages.length - 4, pages.length);
    showPages = [1, "...", ...changedListPages];
  } else {
    changedListPages = pages.slice(currentPage - 2, currentPage + 2);
    showPages = [1, "...", ...changedListPages, "...", pages.length];
  }

  return (
    <div className="users">
      <div className="users__pagination">
        {showPages.map((p) => (
          <span
            onClick={(e) =>
              !isNaN(e.target.textContent) ? onChangePage(p) : ""
            }
            className={`users__page${
              currentPage === p ? " users__page_current" : ""
            }`}
          >
            {p}
          </span>
        ))}
      </div>
      <div className="users__inner">
        {usersPage?.map((user) => {
          return (
            <div key={user.id} className="users__item">
              <div className="users__column">
                <div className="users__img">
                  <NavLink to={"/profile/" + user.id}>
                    <img src={user.photos.small || userPhoto} alt="user" />
                  </NavLink>
                </div>
                <button
                  onClick={() => {
                    if (!user.followed) {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "195da665-d12d-4f0b-adfd-cc1119b6a7f3",
                            },
                          }
                        )
                        .then((res) =>
                          res.data.resultCode === 0 ? followed(user.id) : null
                        );
                    } else {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "195da665-d12d-4f0b-adfd-cc1119b6a7f3",
                            },
                          }
                        )
                        .then((res) =>
                          res.data.resultCode === 0 ? followed(user.id) : null
                        );
                    }
                  }}
                  className={`users__btn ${
                    user.followed ? "" : "users__btn_active"
                  }`}
                >
                  {user.followed ? "Follow" : "Unfollow"}
                </button>
              </div>

              <div className="users__descr">
                <div className="user__name">{user.name}</div>
                <div className="user__status">{user.status}</div>
              </div>
              <div className="users__locations">
                {/* <div className="users__county">{user.location.country}</div>
          <div className="users__city">{user.location.city}</div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
