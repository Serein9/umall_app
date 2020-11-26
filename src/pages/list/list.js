import React, { Component } from "react";
import Header from "../../components/Header/Header";
import List from "../home/components/list/list";
import { reqCateGoods } from "../../utils/http";

export default class list extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    // console.log(this.props);
    reqCateGoods(this.props.match.params.id).then((res) => {
      if (res.data.code == 200) {
        this.setState({
          list: res.data.list,
        });
      }
    });
  }
  render() {
    return (
      <div className="list">
        <Header title={this.props.match.params.name} back></Header>
        <List goods={this.state.list}></List>
      </div>
    );
  }
}
