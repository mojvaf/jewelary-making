import React from "react";
import { useSelector } from "react-redux";

interface ShowCounterProps {}

const ShowCounter: React.FC<ShowCounterProps> = () => {
  const counter = useSelector((store: any) => store.counter.count);
  return <div>counter: {counter} </div>;
};

export default ShowCounter;
