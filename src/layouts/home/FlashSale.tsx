import React, { useEffect, useRef, useState } from "react";
import ProductItem from "../../components/falshSale/ProductItem";
import Star from "../../components/star/Star";
import flashsale from "../../images/flashsale.jpg";
import product_1 from "../../images/product_1.jpg";
import product_2 from "../../images/product_2.jpg";
const FlashSale = () => {
  const [active, setActive] = useState(false);
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    elementsRef.current = Array.from(
      document.getElementsByClassName("dataTab")
    ) as HTMLElement[];
  }, []);
  const handlerDataTab = (e: any) => {
    elementsRef.current.forEach((item) => {
      const dataTab: string | null = item.getAttribute("data-tab");
      item.classList.remove("active");
      if (dataTab === e.target.dataset.tab) {
        item.classList.add("active");
      }
    });
  };
  return (
    <div className="mb-[30px] px-[40px] max-md:px-[10px] ">
      <div className=" pb-[20px] flex items-center gap-x-[10px] ">
        <h2 className="text-[32px] font-bold uppercase">Giảm sốc 50%</h2>
        <img src={flashsale} alt="" className="w-[50px] h-[50px]" />
      </div>
      <ul className="flex p-[15px] border-b-[1px] border-t-[1px] gap-x-[20px] text-[18px] font-medium text-[#9c9c9c] ">
        <li>
          <span
            className="flashSale-title  "
            data-tab="1"
            onClick={(e) => handlerDataTab(e)}
          >
            Hàng hiệu -50%
          </span>
          <div data-tab="1" className="relative dataTab "></div>
        </li>
        <li>
          <span
            className="flashSale-title active"
            data-tab="2"
            onClick={(e) => handlerDataTab(e)}
          >
            Năng động mùa hè
          </span>
          <div data-tab="2" className="relative dataTab "></div>
        </li>
      </ul>
      <div className="py-[40px]   grid grid-cols-4 gap-[30px] max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-[10px] ]">
        <ProductItem icon1={product_1} icon2={product_2}></ProductItem>
        <ProductItem icon1={product_1} icon2={product_2}></ProductItem>
        <ProductItem icon1={product_1} icon2={product_2}></ProductItem>
        <ProductItem icon1={product_1} icon2={product_2}></ProductItem>
        <ProductItem icon1={product_1} icon2={product_2}></ProductItem>
      </div>
    </div>
  );
};

export default FlashSale;
