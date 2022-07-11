import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { editItem, setInputText } from "../redux/slice/item";

const AddItem = () => {
  const { id, inputText } = useAppSelector((state) => state.items);

  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>This is AddItem</h1>
      <form>
        <input
          type="text"
          placeholder="enter a text"
          value={inputText}
          onChange={(e) => dispatch(setInputText(e.target.value))}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(editItem(inputText));
            dispatch(setInputText(""));
          }}
        >
          {id ? "edit" : "add"}
        </button>
      </form>
    </div>
  );
};

export default AddItem;
