import React, { Component } from "react";
import "./shop.styl";
import Header from "../../components/Header/Header";
import storeImg from "../../assets/img/store.png";
import checkImg from "../../assets/img/radio_nor.png";
import checkedImg from "../../assets/img/radio_hig.png";
import editImg from "../../assets/img/editor_nor.png";
import editedImg from "../../assets/img/editor_hig.png";
import { reqCarDel, reqCarEdit, reqCarList } from "../../utils/http";
import { confirmAlert, successAlert } from "../../utils/alert";
import { filterPrice } from "../../filter/index";

export default class shop extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      isEdit: false,
      isCheck: false,
    };
  }
  componentDidMount() {
    this.init();
  }
  init() {
    reqCarList().then((res) => {
      if (res.data.code == 200) {
        let list = res.data.list ? res.data.list : [];
        list.forEach((item) => {
          item.checked = false;
        });
        this.setState({
          list: list,
        });
      }
    });
  }

  edit() {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }
  del(id) {
    confirmAlert(() => {
      reqCarDel(id).then((res) => {
        if (res.data.code == 200) {
          this.init();
          this.setState({
            isEdit: false,
          });
        }
      });
    });
  }
  add(id) {
    reqCarEdit({
      id: id,
      type: 2,
    }).then((res) => {
      if (res.data.code == 200) {
        this.init();
      }
    });
  }
  sub(id, num) {
    if (num <= 1) {
      successAlert("不能再少啦");
      return;
    }
    reqCarEdit({
      id: id,
      type: 1,
    }).then((res) => {
      if (res.data.code == 200) {
        this.init();
      }
    });
  }
  checkOne(index) {
    let { list } = this.state;
    list[index].checked = !list[index].checked;
    this.setState({
      list: list,
      isCheck: list.every((item) => item.checked),
    });
  }
  checkAll() {
    this.setState({
      isCheck: !this.state.isCheck,
      list: this.state.list.map((item) => {
        item.checked = !this.state.isCheck;
        return item;
      }),
    });
  }
  render() {
    let { list, isEdit, isCheck } = this.state;
    let sum = 0;
    list.forEach((item) => {
      if (item.checked) {
        sum += item.price * item.num;
      }
    });
    return (
      <div className="shop">
        <Header title="购物车" back></Header>
        {list.length === 0 ? <div>购物车空空，快去逛街吧</div> : null}
        {list.map((item, index) => {
          return (
            <div className="shopBox" key={item.id}>
              <div className={isEdit ? "inner inner-show-del" : "inner"}>
                <div className="shopBox-hd">
                  <img src={storeImg} alt="" />
                  <span>杭州保税区仓</span>
                </div>
                <div className="shopBox-bd">
                  <div className="check" onClick={() => this.checkOne(index)}>
                    <img src={item.checked ? checkedImg : checkImg} alt="" />
                  </div>
                  <div className="goodsImg">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="goodsDetail">
                    <h2>{item.goodsname}</h2>
                    <span onClick={() => this.sub(item.id, item.num)}>-</span>
                    <span>{item.num}</span>
                    <span onClick={() => this.add(item.id)}>+</span>
                    <p>总价:¥{filterPrice(item.price * item.num)}</p>
                  </div>
                  <div className="price">¥ {filterPrice(item.price)}</div>
                  <div className="goodsDel" onClick={() => this.del(item.id)}>
                    删除
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* 底部 */}
        <div className="footerArea">
          <div className="checkAll" onClick={() => this.checkAll()}>
            <img src={isCheck ? checkedImg : checkImg} alt="" />
            <p>全选</p>
          </div>
          <div className="edit" onClick={() => this.edit()}>
            <img src={isEdit ? editedImg : editImg} alt="" />
            <p>编辑</p>
          </div>
          <div className="priceAll">总价:¥{filterPrice(sum)}</div>
          <div className="goBuy">去结算</div>
        </div>
      </div>
    );
  }
}
