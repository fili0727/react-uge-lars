import { BaseProps } from "../types";
import { useState} from "react";

let currentCount = 0;

console.log("tis");


export default function StateDemo1({ title }: BaseProps) {
  const [count, setCount] = useState(currentCount);

  function increment() {
    setCount((prev)=> prev + 2);

  }

  function decrement() {
    setCount(count - 1);
  }

  currentCount = count;

  return (
    <>
      <h2>{title}</h2>
      <button onClick={() => {increment()}}>Increment</button>
      <button onClick={() => {decrement()}}> Decrement</button>
      <h3>{count}</h3>
    </>
  );
}
