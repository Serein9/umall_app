import "./banner.styl";
import { Carousel } from "antd-mobile";
import React, { Component } from "react";

export default class banner extends Component {
  render() {
    let { banner } = this.props;
    return (
      <div className="banner">
        <Carousel autoplay={true} infinite>
          {banner.map((item) => (
            <a key={item.id} style={{ display: "inline-block", width: "100%", height: "100%" }}>
              <img
                src={item.img}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}
