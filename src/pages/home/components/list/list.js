import React from "react";
import "./list.styl";
import { Link } from "react-router-dom";
export default function list(props) {
  let { goods } = props;
  return (
    <div className="list">
      {goods.map((item) => {
        return (
          <Link to={"/detail?id="+item.id} className="listBox" key={item.id}>
            <div className="listBoxImg">
              <img src={item.img} alt="" />
            </div>
            <div className="listBoxCon">
              <h2>{item.goodsname}</h2>
              <p>¥{item.price}</p>
              <button className="btn">立即抢购</button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
