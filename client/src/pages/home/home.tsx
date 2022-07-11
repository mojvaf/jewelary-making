import React from "react";
import AddItem from "../../components/AddItem";
import ItemList from "../../components/ItemList";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <AddItem />
      <ItemList />
    </div>
  );
};

export default Home;
