import React, { Component } from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setProfileActionCreator } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
      .then((res) => this.props.setProfileActionCreator(res.data));
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});

const WithRouterProfileComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setProfileActionCreator })(
  WithRouterProfileComponent
);
