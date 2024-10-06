import { useState } from "react";
import React from "react";
import cl from './counter.module.scss';
import { FC } from "react";

interface CounterProps {
  clss?: string;
  initial : number;
  limit?: number;
  ind?: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

const Counter: FC<CounterProps> = ({clss, ind, initial = 0, limit = 0, onDecrement = () => {}, onIncrement = () => {}}) => {
  const [value, setValue] = useState<number>(initial);
  const subtract = () => {
    if (value > limit){
      setValue(value - 1);
      onDecrement();
    }

  };

  return (
    <div className={`${cl.counter} ${clss}`}>
      <button className={cl.btn} onClick={subtract}>-</button>
      <p>{value}</p>
      <button
        className={cl.btn}
        onClick={() => {
          setValue(value + 1);
          onIncrement()
        }}
      >
        +
      </button>
      {ind}
    </div>
  );
};

export default Counter;
