import { Toast, Modal } from "antd-mobile";

export const successAlert = (msg) => {
  Toast.success(msg, 1);
};
export const errorAlert = (msg) => {
  Toast.fail(msg, 1);
};

export const confirmAlert = (fn) => {
  Modal.alert("删除提示", "确定要删除吗", [
    { text: "删除", onPress: () => console.log("cancel") },
    { text: "确认", onPress: () => {fn()}},
  ]);
};
