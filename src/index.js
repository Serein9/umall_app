import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//配置路由模式 HashRouter:hash模式 BrowserRouter:history模式
import { HashRouter } from "react-router-dom";
//1.assets
import "./assets/css/reset.css";
import "./assets/js/rem.js";

//2.components 公共组件

// 3.pages 路由组件

// 4.filters 过滤器

// 5.utils/http.js ajax请求

// 6.store

// 7.UI 框架
import "antd-mobile/dist/antd-mobile.css";
// 8.stylus 样式

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
