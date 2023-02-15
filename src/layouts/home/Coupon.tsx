import React from "react";
import CouponItem from "../../components/coupon/CouponItem";
import coupon_10 from "../../images/coupon_10.jpg";
import Slider from "react-slick";
const settings: {} = {
  dots: true,
  infinite: false,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Coupon = () => {
  return (
    <div className="pl-[40px] pr-[20px] max-lg:pl-[20px] pb-[40px] max-md:pb-[20px] max-lg:pr-[10px]">
      <Slider
        {...settings}
        className="cursor-pointer flex flex-row justify-between  "
      >
        <CouponItem icon={coupon_10}></CouponItem>
        <CouponItem icon={coupon_10}></CouponItem>
        <CouponItem icon={coupon_10}></CouponItem>
        <CouponItem icon={coupon_10}></CouponItem>
      </Slider>
    </div>
  );
};

export default Coupon;
