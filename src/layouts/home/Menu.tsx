import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuMobi from "./MenuMobi";
const Menu = () => {
  const [isMenuHidden, setIsMenuHidden] = useState<boolean>(false);
  const [isMenuMobi, setIsMenuMobi] = useState<boolean>(false);
  const settings: {} = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  useEffect(() => {
    function handleResize() {
      setIsMenuHidden(window.innerWidth < 1024);
      setIsMenuMobi(window.innerWidth < 1024);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="">
      <div className="slogan h-[40px] max-md:h-[30px] relative">
        <h3 className="h-full text-center pt-[10px] bg-[#cd6420] font-normal text-white max-md:text-[12px]  max-md:pt-[7px]">
          CHÀO HÈ SÔI NỔI - MỎI TAY SĂN QUÀ - ƯU ĐÃI X3{" "}
        </h3>
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="currentColor"
            className="absolute right-2 top-[11%] w-7 h-7 rounded-[100%] bg-[#e6b18f] text-center text-[#7f4a28] max-md:w-5 max-md:h-5 max-md:top-[20%]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="flex py-[20px] max-lg:grid max-lg:grid-cols-3 items-center">
        {isMenuMobi ? <MenuMobi></MenuMobi> : ""}
        <div>
          <b className="text-[24px] px-[35px] max-md:ml-[-90px] ">Rone</b>
        </div>
        <div
          className={
            isMenuHidden ? "hidden" : "w-[800px]  max-xl:w-[550px] items-center"
          }
        >
          <Slider {...settings} className="text-center cursor-pointer">
            <li>
              <span className="menu-hover">Trang chủ</span>
            </li>
            <li className="relative">
              <span className="menu-hover">Sản phẩm</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 absolute right-[14%] top-[10%] max-xl:right-[0%] xl:right-[15%]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li className="relative">
              <span className="menu-hover">Chương trình khuyến mãi</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 absolute right-[-10%] top-[10%] max-xl:right-[-15%] xl:right-[-10%]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li>
              <span className="menu-hover">Đơn hàng</span>
            </li>
            <li>
              <span className="menu-hover">Hệ thống cửa hàng</span>
            </li>
            <li>
              {" "}
              <span className="menu-hover">Giới thiệu</span>
            </li>
            <li>
              {" "}
              <span className="menu-hover">Tin tức</span>
            </li>
            <li>
              {" "}
              <span className="menu-hover">Liên hệ</span>
            </li>
          </Slider>
        </div>
        <div className="flex ml-[100px] max-lg:ml-[40px] gap-x-5 max-md:ml-[-75px] ">
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <div className="number text-[12px] text-center text-white">10</div>
          </div>
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <div className="number text-[12px] text-center text-white">10</div>
          </div>
        </div>
      </div>
    </div>
  );
};
function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return <div className={`${className} next`} onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={`${className} prev`} onClick={onClick} />;
}

export default Menu;
