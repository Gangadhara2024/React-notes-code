import { memo, useState } from "react";

const A = memo(({ a }) => {
  console.log("A rendered");
  return (
    <div>
      <p>inside A comp</p>
      <h3>value of A : {a} </h3>
    </div>
  );
});
export const Main = () => {
  console.log("memo-example rendered");
  const [toggle, setToggle] = useState(true);
  return (
    <div className="box">
      <A a={10} />
      <button onClick={() => setToggle(!toggle)}>
        Re- render memo-example
      </button>
    </div>
  );
};
