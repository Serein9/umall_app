import React, { Component } from "react";
import { Route, Redirect, Router } from "react-router-dom";

export default class MyRoute extends Component {
  render() {
    let isLogin = sessionStorage.getItem("userInfo");
    return <div>{isLogin ? <Route {...this.props}></Route> : <Redirect to="/login"></Redirect>}</div>;
  }
}
