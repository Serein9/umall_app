import React, { Component } from "react";
import Home from "../home/home";
import Cate from "../cate/cate";
import Shop from "../shop/shop";
import Mine from "../mine/mine";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import "./index.styl";
import home_hig from "../../assets/img/tab_home_hig.png";
import home_nor from "../../assets/img/tab_home_nor.png";
import me_hig from "../../assets/img/tab_me_hig.png";
import me_nor from "../../assets/img/tab_me_nor.png";
import menu_hig from "../../assets/img/tab_menu_hig.png";
import menu_nor from "../../assets/img/tab_menu_nor.png";
import shopping_hig from "../../assets/img/tab_shopping_hig.png";
import shopping_nor from "../../assets/img/tab_shopping_nor.png";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      navs: [
        {
          text: "首页",
          path: "/index/home",
          nor: home_nor,
          hig: home_hig,
        },
        {
          text: "列表",
          path: "/index/cate",
          nor: menu_nor,
          hig: menu_hig,
        },
        {
          text: "购物车",
          path: "/index/shop",
          nor: shopping_nor,
          hig: shopping_hig,
        },
        {
          text: "我的",
          path: "/index/mine",
          nor: me_nor,
          hig: me_hig,
        },
      ],
    };
  }
  render() {
    let { navs } = this.state;
    return (
      <div className="index">
        {/* 二级路由出口 */}
        <Switch>
          <Route path="/index/home" component={Home}></Route>
          <Route path="/index/cate" component={Cate}></Route>
          <Route path="/index/shop" component={Shop}></Route>
          <Route path="/index/mine" component={Mine}></Route>
          <Redirect to="/index/home"></Redirect>
        </Switch>
        <div className="footer">
          {navs.map((item) => {
            return (
              <NavLink key={item.text} to={item.path} activeClassName="select">
                <img src={this.props.location.pathname == item.path ? item.hig : item.nor} alt="" />
                <div>{item.text}</div>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}
