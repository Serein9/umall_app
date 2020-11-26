import React from "react";
import "./Info.styl";
import likeImg from "../../../../assets/img/img/cart_on.png";
import { filterPrice } from "../../../../filter/index";
export default function Info(props) {
  let { detail } = props;
  return (
    <div className="Info">
      <h3>{detail.goodsname}</h3>
      <span>¥{filterPrice(detail.price)}</span>
      {detail.isnew === 1 ? <i>新品</i> : null}
      {detail.ishot === 1 ? <i>热卖</i> : null}
      <p>¥{filterPrice(detail.market_price)}</p>
      <div className="likes">
        <img src={likeImg} alt="" />
        <em>收藏</em>
      </div>
    </div>
  );
}
