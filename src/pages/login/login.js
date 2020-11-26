import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { successAlert } from "../../utils/alert";
import { reqLogin } from "../../utils/http";
import "./login.styl";
export default class login extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        phone: "",
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
    // console.log(this.state.user)
    reqLogin(this.state.user).then((res) => {
      if (res.data.code == 200) {
        successAlert(res.data.msg);
        //存储信息
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.list));
        //跳转
        this.props.history.push("/index");
      }
    });
  }
  render() {
    return (
      <div>
        <Header title="登录" register></Header>
        <div className="loginBox">
          <div className="inputBox-con">
            <p>账号:</p>
            <input type="text" className="inputBox-con-ipt" onChange={(e) => this.changeUser(e, "phone")} />
          </div>
          <div className="inputBox-con">
            <p>密码:</p>
            <input type="password" className="inputBox-con-ipt" onChange={(e) => this.changeUser(e, "password")} />
          </div>
          <div className="inputBox-con clearfix">
            <a href="#">忘记密码</a>
          </div>
          <div className="inputBox-con">
            <div className="btn" onClick={() => this.submit()}>
              登录
            </div>
          </div>
        </div>
      </div>
    );
  }
}
