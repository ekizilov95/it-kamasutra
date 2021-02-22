import React, { Component } from "react";
import { connect } from "react-redux";
import {
  followed,
  setUsers,
  selectedPage,
  setTotalUsers,
  toggleIsFething,
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFething(false);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setTimeout(() => {
          this.props.toggleIsFething(true);
        }, 200);
        this.props.setUsers(res.data.items);
        this.props.setTotalUsers(res.data.totalCount);
      });
  }

  onChangePage = (p) => {
    this.props.selectedPage(p);
    this.props.toggleIsFething(false);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setTimeout(() => {
          this.props.toggleIsFething(true);
        }, 200);
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    return this.props.isFetching ? (
      <Users
        usersPage={this.props.usersPage}
        totalCountUsers={this.props.totalCountUsers}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        followed={this.props.followed}
        onChangePage={this.onChangePage}
        isFollowed={this.props.isFollowed}
      />
    ) : (
      <Preloader />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalCountUsers: state.usersReducer.totalCountUsers,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
  };
};

export default connect(mapStateToProps, {
  followed,
  setUsers,
  selectedPage,
  setTotalUsers,
  toggleIsFething,
})(UsersContainer);
