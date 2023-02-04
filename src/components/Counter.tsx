import { useState } from 'react';
import classes from './Counter.module.scss';

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>{counter}</h1>
      <button className={classes.btn} type='button' onClick={increment}>increment</button>
    </>
  );
}

export default Counter;