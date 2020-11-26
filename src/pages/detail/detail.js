import React, { Component } from "react";
import Header from "../../components/Header/Header";
import querystring from "querystring";
import { reqDetail } from "../../utils/http";
import Info from "./components/Info/Info";
import "./detail.styl";
import Picker from "./components/picker/picker";

export default class detail extends Component {
  constructor() {
    super();
    this.state = {
      detail: "",
      isshow: false,
    };
    this.des = React.createRef();
  }
  componentDidMount() {
    // console.log(this.props);
    let str = this.props.location.search; //'?id=1&a=10&b=20&c=30'-->{id:"1",a:"10",b:"20",c:"30"}
    let result = querystring.parse(str.slice(1));
    // console.log(result);
    reqDetail(result.id).then((res) => {
      if (res.data.code == 200) {
        let list = res.data.list[0];
        list.specsattr = JSON.parse(list.specsattr);
        this.setState(
          {
            detail: list,
          },
          () => {
            console.log(this.state.detail);
            this.des.current.innerHTML = this.state.detail.description;
          }
        );
      }
    });
  }
  show() {
    this.setState({
      isshow: true,
    });
  }
  hide() {
    this.setState({
      isshow: false,
    });
  }
  render() {
    let { detail, isshow } = this.state;
    return (
      <div className="detail">
        <Header title="商品详情" back shopcar></Header>
        <img src={detail.img} alt="" />
        {detail.goodsname ? <Info detail={detail}></Info> : null}
        <div ref={this.des}></div>
        <div className="footer">
          <div className="footerBtn" onClick={() => this.show()}>
            加入购物车
          </div>
        </div>
        {detail.goodsname && isshow ? <Picker detail={detail} hide={() => this.hide()}></Picker> : null}
      </div>
    );
  }
}
