import React from "react";
import { useDispatch } from "react-redux";
import { inCounter, setCounterValue } from "../../redux/slice/counter";

interface CounterChangerProps {}

const CounterChanger: React.FC<CounterChangerProps> = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(inCounter())}>Increase</button>
      <input
        type="number"
        onChange={(e) => dispatch(setCounterValue(parseInt(e.target.value)))}
      />
    </div>
  );
};

export default CounterChanger;
