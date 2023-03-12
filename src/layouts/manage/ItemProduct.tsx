import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionDelete from "../../components/actions/ActionDelete";
import ActionEdit from "../../components/actions/ActionEdit";
type itemType = {
  item: any;
  _id: string;
  brand: string;
  image1: string;
  image2: string;
  name: string;
  price: string;
  quantity: string;
  size: string;
};
type props = {
  item: object[] | {};
};

const ItemProduct = ({ item }: props | itemType) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td>
        <span className="product_id" title={item._id}>
          {item._id}
        </span>
      </td>
      <td>{item.name}</td>
      <td>{item.brand}</td>
      <td>{item.quantity}</td>
      <td>
        <div className="flex gap-x-[10px] text-center items-center justify-center">
          <ActionEdit
            onClick={() => navigate(`/manage/update/${item._id}`)}
          ></ActionEdit>
          <ActionDelete></ActionDelete>
        </div>
      </td>
    </tr>
  );
};

export default ItemProduct;
