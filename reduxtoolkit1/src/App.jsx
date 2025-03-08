import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement } from './counterSlice';

import {multiply, incrementByAmount} from './testSlice'

export default function App() {
  const dispatch = useDispatch();

  const count = useSelector(state => state.test.count);

  return (
    <div>
      <button onClick={() => dispatch(multiply())}>Multiply</button>
      <br />
      <span>Count is : {count}</span>
      <br />
      <button onClick={() => dispatch(incrementByAmount(25))}>incrementByAmount</button>
    </div>
  );
}

