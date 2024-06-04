import React, { useState } from "react";

function findSum() {
  console.log("findsum fn");
  let sum = 0;
  for (let i = 2; i <= 10; i += 2) {
    sum += i;
  }
  return sum;
}
export const App = () => {
  const [count, setCount] = useState(findSum);

  const inc = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1> count: {count} </h1>
      <button onClick={inc}>increment</button>
    </div>
  );
};
