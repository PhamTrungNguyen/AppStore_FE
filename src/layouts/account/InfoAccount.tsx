import React, { useEffect, useState } from "react";
import { parseJwt } from "../../services/HandlerService";

type userType = {
  username: string;
};
const InfoAccount = () => {
  const token: string | null = sessionStorage.getItem("token");
  const [user, setUser] = useState<userType>({
    username: "",
  });
  useEffect(() => {
    if (token !== null) {
      try {
        setUser(parseJwt(token));
      } catch (error) {
        console.error(error);
      }
    }
  }, [token]);
  return (
    <div className="flex-grow  flex-basis-0">
      <h5 className="uppercase">tài khoản</h5>
      <span className="text-[14px]">
        Tên tài khoản <b>{user.username} !</b>
      </span>
      <div className="flex items-center gap-2 mt-[20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <span>Địa chỉ: {`Chưa có`}</span>
      </div>
      <div className="flex items-center gap-2 mt-[20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
        <span>Điện thoại: {`Chưa có`}</span>
      </div>
      <h5 className="uppercase mt-[20px]">Đơn hàng của bạn</h5>
      <table>
        <thead>
          <tr>
            <th>Mã đơn hàng</th>
            <th>Ngày đặt</th>
            <th>Thành tiền</th>
            <th>TT vận chuyển</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>22/10/2022</td>
            <td>100,000</td>
            <td>ABC</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoAccount;
