import axios from "axios";
import qs from "qs";
import { errorAlert } from "./alert";

//请求拦截
axios.interceptors.request.use((req) => {
  if (req.url !== "/api/register" && req.url !== "/api/login") {
    req.headers.authorization = JSON.parse(sessionStorage.getItem("userInfo")).token;
  }
  return req;
});

axios.interceptors.response.use((res) => {
  console.log("本次请求地址：" + res.config.url);
  console.log(res);
  if (res.data.code != 200) {
    errorAlert(res.data.msg);
  }

  //统一处理掉线
  if (res.data.msg === "登录已过期或访问权限受限") {
    sessionStorage.removeItem("userInfo");
    //跳转到"/login"
    window.location.href = "http://localhost:3001/#/login";
  }
  return res;
});
//首页商品数据
export const reqHomeGoods = () => {
  return axios({
    url: "/api/getindexgoods",
    method: "get",
  });
};

//注册
export const reqRegister = (user) => {
  return axios({
    url: "/api/register",
    method: "post",
    data: qs.stringify(user),
  });
};

//登录
export const reqLogin = (user) => {
  return axios({
    url: "/api/login",
    method: "post",
    data: qs.stringify(user),
  });
};

//轮播图
export const reqBanner = () => {
  return axios({
    url: "/api/getbanner",
    method: "get",
  });
};

//商品详情
export const reqDetail = (id) => {
  return axios({
    url: "/api/getgoodsinfo",
    method: "get",
    params: {
      id: id,
    },
  });
};

//分类树形结构
export const reqCate = () => {
  return axios({
    url: "/api/getcatetree",
    method: "get",
  });
};

//分类树形结构
export const reqCateGoods = (fid) => {
  return axios({
    url: "/api/getgoods",
    method: "get",
    params: {
      fid: fid,
    },
  });
};

//购物车添加
export const reqCarAdd = (user) => {
  return axios({
    url: "/api/cartadd",
    method: "post",
    data: qs.stringify(user),
  });
};

//购物车列表
export const reqCarList = () => {
  return axios({
    url: "/api/cartlist",
    method: "get",
    params: {
      uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
    },
  });
};

//购物车删除
export const reqCarDel = (id) => {
  return axios({
    url: "/api/cartdelete",
    method: "post",
    data: qs.stringify({
      id: id,
    }),
  });
};

//购物车编辑
export const reqCarEdit = (user) => {
  return axios({
    url: "/api/cartedit",
    method: "post",
    data: qs.stringify(user),
  });
};
