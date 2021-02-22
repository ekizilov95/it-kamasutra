import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import "./Header.css";
import * as axios from "axios";
import { setAuthUserAC } from "../../redux/auth-reducer";

class HeaderContainer extends Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        this.props.setAuthUserAC(response.data.data);
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  login: state.authReducer.login,
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, { setAuthUserAC })(HeaderContainer);
