import axios from "axios";
import { toast } from "react-toastify";

export const handlerAPIPost = (API: string, data: {}) => {
  return axios.post(API, data);
};
export const handlerAPIGet = (API: string) => {
  return axios.get(API);
};
export const handlerAPIDelete = (API: string) => {
  return axios.delete(API);
};
export const handlerAPIUpdate = (API: string, data?: {}) => {
  return axios.put(API, data);
};
export function parseJwt(token: string) {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}
export const handlerLogOut = () => {
  sessionStorage.removeItem("token");
  toast.success("Đăng xuất thành công", {
    pauseOnHover: false,
    delay: 0,
    autoClose: 1500,
  });
  setTimeout(() => {
    window.location.reload();
  }, 1300);
};
