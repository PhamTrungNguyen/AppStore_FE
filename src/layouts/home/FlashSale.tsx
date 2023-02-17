import React, { useEffect, useRef, useState } from "react";
import ProductItem from "../../components/falshSale/ProductItem";
import Star from "../../components/star/Star";
import flashSale from "../../images/flashsale.jpg";
import product_1 from "../../images/product_1.jpg";
import product_2 from "../../images/product_2.jpg";
import product_3 from "../../images/product_3.jpg";
import product_4 from "../../images/product_4.jpg";
const FlashSale = () => {
  const [dataTab, setDataTab] = useState("1");
  const handlerDataTab = (dataTab: string) => {
    setDataTab(dataTab);
  };
  return (
    <div className="mb-[30px] px-[40px] max-md:px-[10px] pt-[30px]">
      <div className=" pb-[20px] flex items-center gap-x-[10px] ">
        <h2 className="text-[32px] font-bold uppercase">Giảm sốc 50%</h2>
        <img src={flashSale} alt="" className="w-[50px] h-[50px]" />
      </div>
      <ul className="flex p-[15px] border-b-[1px] border-t-[1px] gap-x-[20px] text-[18px] font-medium text-[#9c9c9c] ">
        <li>
          <span
            className="flashSale-title "
            onClick={(e) => handlerDataTab("1")}
          >
            Hàng hiệu -50%
          </span>
          <div
            className={`relative dataTab ${dataTab === "1" ? "active" : ""}`}
          ></div>
        </li>
        <li>
          <span
            className="flashSale-title"
            onClick={(e) => handlerDataTab("2")}
          >
            Năng động mùa hè
          </span>
          <div
            className={`relative dataTab ${dataTab === "2" ? "active" : ""}`}
          ></div>
        </li>
      </ul>
      <div className="py-[40px] xl:grid-cols-5   grid grid-cols-4 gap-[30px] max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-[10px] ]">
        <ProductItem icon1={product_3} icon2={product_4}></ProductItem>
        <ProductItem icon1={product_1} icon2={product_2}></ProductItem>
        <ProductItem icon1={product_1} icon2={product_2}></ProductItem>
        <ProductItem icon1={product_1} icon2={product_2}></ProductItem>
        <ProductItem icon1={product_1} icon2={product_2}></ProductItem>
      </div>
    </div>
  );
};

export default FlashSale;
