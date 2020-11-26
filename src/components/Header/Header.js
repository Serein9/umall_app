import React, { Component } from "react";
import "./Header.styl";
import { Link, withRouter } from "react-router-dom";
class Header extends Component {
  goBack() {
    this.props.history.go(-1);
  }
  render() {
    let { title, register, back, shopcar } = this.props;
    return (
      <div className="header">
        {back ? (
          <span className="header-back" onClick={() => this.goBack()}>
            返回
          </span>
        ) : null}
        <div className="header-title">{title}</div>
        {register ? (
          <Link to="/register" className="header-register">
            注册
          </Link>
        ) : null}
        {shopcar ? (
          <Link to="/index/shop" className="header-register">
            购物车
          </Link>
        ) : null}
      </div>
    );
  }
}
export default withRouter(Header);
