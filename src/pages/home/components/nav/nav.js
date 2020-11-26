import React from "react";
import "./nav.styl";
import logo from "../../../../assets/img/img/home/1.jpg";
export default function nav() {
  return (
    <div className="nav">
      <div className="navBox">
        <img src={logo} alt="" />
        <p>限时抢购</p>
      </div>
      <div className="navBox">
        <img src={logo} alt="" />
        <p>积分商城</p>
      </div>
      <div className="navBox">
        <img src={logo} alt="" />
        <p>商品分类</p>
      </div>
      <div className="navBox">
        <img src={logo} alt="" />
        <p>联系我们</p>
      </div>
    </div>
  );
}
