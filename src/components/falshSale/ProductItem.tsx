import React from "react";
import Star from "../star/Star";

const ProductItem = (props: any) => {
  return (
    <div className="w-[216px] max-md:w-[163px]">
      <div className="product-image cursor-pointer duration-300 h-[324px] relative">
        <img
          src={props.icon1}
          alt=""
          className=" object-cover w-full h-full "
        />
        <img
          src={props.icon2}
          alt=""
          className="image-hover object-cover w-full h-full"
        />
      </div>
      <div className="px-[10px] py-[15px]">
        <div className="flex justify-between">
          <span className="uppercase text-[#969696]">mango</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <h3 className="font-normal">Váy Arta</h3>
        <div className="flex items-center mt-[5px]">
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <span className="text-[12px] ml-[10px]">(1 đánh giá)</span>
        </div>
        <div className="mt-[5px] text-[#df0000] font-semibold">2,150,000đ</div>
        <div className="flex gap-x-[10px]">
          <span className="line-through text-[14px] text-[#666666]">
            4,300,000đ
          </span>
          <div className="px-[5px] py-[2px] bg-[#d84144] text-[12px] rounded-lg text-[white]">
            -50%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
