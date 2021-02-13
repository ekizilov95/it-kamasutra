import React from "react";
import { connect } from "react-redux";
import { followActionCreator } from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followed: (userId) => dispatch(followActionCreator(userId)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
