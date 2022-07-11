import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { deleteItem, handleEditItem, ItemType } from "../redux/slice/item";

const ItemList = () => {
  const itemList = useAppSelector((store) => store.items.itemList);
  const dispatch = useAppDispatch();

  const handleDelete = (id: ItemType["id"]) => {
    dispatch(deleteItem(id));
  };

  const editItem = (item: ItemType) => {
    dispatch(handleEditItem(item));
  };

  return (
    <ul>
      {itemList.map((item) => 
        <li>{item.title}
        <button onClick={()=>handleDelete(item.id)}>x</button>
        <button onClick={()=>editItem(item)}>Edit</button>
        </li>
      )}
    </ul>
  );
};

export default ItemList;
