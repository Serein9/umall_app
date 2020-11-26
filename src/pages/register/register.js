import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { successAlert } from "../../utils/alert";
import { reqRegister } from "../../utils/http";
import "./register.styl";
export default class register extends Component {
  componentDidMount() {}
  constructor() {
    super();
    this.state = {
      user: {
        phone: "",
        nickname: "",
        password: "",
      },
    };
  }
  changeUser(e, key) {
    this.setState({
      user: {
        ...this.state.user,
        [key]: e.target.value,
      },
    });
  }
  submit() {
    reqRegister(this.state.user).then((res) => {
      if (res.data.code == 200) {
        successAlert(res.data.msg);
        this.props.history.push("/login");
      }
    });
  }
  render() {
    return (
      <div>
        <Header title="注册" back></Header>
        <div className="registerBox">
          <div className="inputBox-con">
            <p>手机号:</p>
            <input type="text" className="inputBox-con-ipt" onChange={(e) => this.changeUser(e, "phone")} />
          </div>
          <div className="inputBox-con">
            <p>昵称:</p>
            <input type="text" className="inputBox-con-ipt" onChange={(e) => this.changeUser(e, "nickname")} />
          </div>
          <div className="inputBox-con">
            <p>密码:</p>
            <input type="password" className="inputBox-con-ipt" onChange={(e) => this.changeUser(e, "password")} />
          </div>
          <div className="inputBox-con">
            <div className="btn" onClick={() => this.submit()}>
              注册
            </div>
          </div>
        </div>
      </div>
    );
  }
}
