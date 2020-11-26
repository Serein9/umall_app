import React, { Component } from "react";
import Header from "../../components/Header/Header";
import "./cate.styl";
import { reqCate } from "../../utils/http";
export default class cate extends Component {
  constructor() {
    super();
    this.state = {
      cateList: [],
      n: 0,
    };
  }
  componentDidMount() {
    reqCate().then((res) => {
      if (res.data.code == 200) {
        this.setState({
          cateList: res.data.list,
        });
      }
    });
  }
  changeN(index) {
    this.setState({
      n: index,
    });
  }
  toList(name, id) {
    this.props.history.push("/list/" + name + "/" + id);
  }
  render() {
    let { cateList, n } = this.state;
    let rightList = cateList[n] ? cateList[n].children : [];
    return (
      <div>
        <Header title="分类" back></Header>
        <div className="cate">
          <div className="leftNav">
            {cateList.map((item, index) => {
              return (
                <div className={n === index ? " select" : ""} key={item.id} onClick={() => this.changeN(index)}>
                  {item.catename}
                </div>
              );
            })}
          </div>
          <div className="rightBox">
            {rightList.map((item) => {
              return (
                <div className="con" key={item.id} onClick={() => this.toList(item.catename, item.id)}>
                  <div className="item">
                    <img src={item.img} alt="" />
                    <div>{item.catename}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
