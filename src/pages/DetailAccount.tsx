import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { parseJwt } from "../services/HandlerService";
import MenuAccount from "../layouts/account/MenuAccount";
const DetailAccount = () => {
  type userType = {
    username: string;
    role: string;
    email: string;
    number: string;
  };
  const token: string | null = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [user, setUser] = useState<userType>({
    username: "",
    role: "",
    email: "",
    number: "",
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
  useEffect(() => {
    if (token === null) {
      console.log(123);
      navigate("/");
    }
  }, [navigate, token]);
  return (
    <div className="pb-[40px]">
      <div className="text-[14px] px-[30px] py-[4px] bg-[#f6f6f6]">
        <span className="text-[#999999]">
          <a href="/" className="mr-[5px] text-[#2f80ed]">
            Trang chủ
          </a>
          /
        </span>
        <span className="ml-[5px] text-[#999999]">Tài khoản</span>
      </div>
      <div className="pt-[20px] px-[30px] flex gap-x-[40px] max-lg:flex-col">
        <MenuAccount {...user}></MenuAccount>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DetailAccount;
