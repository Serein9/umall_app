import React, { Component } from "react";
import "./picker.styl";
import { reqCarAdd } from "../../../../utils/http";
import { successAlert } from "../../../../utils/alert";
export default class picker extends Component {
  constructor() {
    super();
    this.state = {
      n: 0,
    };
  }
  changeN(index) {
    this.setState({
      n: index,
    });
  }
  add() {
    reqCarAdd({
      uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
      goodsid: this.props.detail.id,
      num: 1,
    }).then((res) => {
      if (res.data.code == 200) {
        successAlert(res.data.msg);
        this.props.hide();
      }
    });
  }
  //点击蒙版
  hide(e) {
    e.target.className === "picker" && this.props.hide();
  }
  render() {
    let { detail } = this.props;
    let { n } = this.state;
    console.log(this.props);
    return (
      <div
        className="picker"
        onClick={(e) => {
          this.hide(e);
        }}
      >
        <div className="con">
          <div className="imgBox">
            <div className="img">
              <img src={detail.img} alt="" />
            </div>

            <div className="title">
              <h2>{detail.goodsname}</h2>
            </div>
          </div>
          <div className="attr">{detail.specsname}</div>
          <div className="btns">
            {detail.specsattr.map((item, index) => {
              return (
                <span key={item} onClick={() => this.changeN(index)} className={index === n ? "select" : ""}>
                  {item}
                </span>
              );
            })}
          </div>
          <div className="btn" onClick={() => this.add()}>
            加入购物车
          </div>
        </div>
      </div>
    );
  }
}
