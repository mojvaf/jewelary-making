import React from "react";
import { useSelector } from "react-redux";

const ShowCounter: React.FC = () => {
  const counter = useSelector((store: any) => store.counter.count);
  return <div>counter: {counter} </div>;
};

export default ShowCounter;
