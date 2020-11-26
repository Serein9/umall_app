import React, { Component } from "react";
import Info from "./components/info/info";
import Banner from "./components/banner/banner";
import List from "./components/list/list";
import Nav from "./components/nav/nav";
import Header from "../../components/Header/Header";
import { reqBanner, reqHomeGoods } from "../../utils/http";
export default class home extends Component {
  constructor() {
    super();
    this.state = {
      goods: [],
      banner: [],
    };
  }
  componentDidMount() {
    reqHomeGoods().then((res) => {
      this.setState({
        goods: res.data.list[0].content,
      });
    });
    reqBanner().then((res) => {
      this.setState({
        banner: res.data.list,
      });
    });
  }
  render() {
    let { goods, banner } = this.state;
    return (
      <div>
        <Header title="首页"></Header>
        {/* 信息 */}
        <Info></Info>

        {/* 轮播图 */}
        {banner.length > 0 ? <Banner banner={banner}></Banner> : null}

        {/* 导航 */}
        <Nav></Nav>

        {/* 列表 */}
        <List goods={goods}></List>
      </div>
    );
  }
}
