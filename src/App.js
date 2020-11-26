import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import Login from "./pages/login/login";
// import Register from "./pages/register/register";
// import List from "./pages/list/list";
// import Index from "./pages/index/index";
// import Detail from "./pages/detail/detail";
import MyRoute from "./utils/MyRoute";
import "./App.styl";
import asyncCom from "./utils/asyncComponet";
let Login = asyncCom(() => import("./pages/login/login"));
let Register = asyncCom(() => import("./pages/register/register"));
let Detail = asyncCom(() => import("./pages/detail/detail"));
let List = asyncCom(() => import("./pages/list/list"));
let Index = asyncCom(() => import("./pages/index/index"));
export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 一级路由出口 */}
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <MyRoute path="/list/:name/:id" component={List}></MyRoute>
          <MyRoute path="/index" component={Index}></MyRoute>
          <MyRoute path="/detail" component={Detail}></MyRoute>
          <Redirect to="/login"></Redirect>
        </Switch>
      </div>
    );
  }
}
