import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/slices/counter";

const IncrementNum = () => {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);

  console.log(state);

  return (
    <div>
      <p>{number}</p>
      <p>holaa {state.counter}</p>
      <button
        onClick={() => {
          dispatch(increment(1));
        }}
      >
        aumentar
      </button>
      <button
        onClick={() => {
          dispatch(decrement(parseFloat(number)));
        }}
      >
        Disminuir
      </button>
      <button
        onClick={() => {
          dispatch(increment(parseFloat(number)));
        }}
      >
        incrementBy 2
      </button>
      <input
        className="text-black px-2 py-1 mb-5"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default IncrementNum;
