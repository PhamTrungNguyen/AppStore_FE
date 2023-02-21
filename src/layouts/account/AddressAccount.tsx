import React, { useEffect, useState } from "react";
import { parseJwt } from "../../services/HandlerService";
type userType = {
  username: string;
};
const AddressAccount = () => {
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
    <div className="flex-grow flex-basis-0">
      <div className="pb-[15px] mb-[15px] border-b-[1px] ">
        <h5 className="uppercase">Địa chỉ của bạn</h5>
        <button
          type="submit"
          className="w-[150px] bg-[#080808] rounded-lg  font-semibold text-white py-[10px] mt-[10px]"
        >
          Thêm địa chỉ
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-[10px]">
            Họ tên: <span>{`${user.username}`}</span>
          </div>
          <div className="mb-[10px]">
            Địa chỉ: <span>{`${user.username}`}</span>
          </div>
          <div className="mb-[20px]">
            Số điện thoại: <span>{`${user.username}`}</span>
          </div>
        </div>
        <span className="text-[#2d9cdb] cursor-pointer hover:text-black duration-300">
          Chỉnh sửa địa chỉ
        </span>
      </div>
    </div>
  );
};

export default AddressAccount;
