import { useState } from "react";
import CountButton from "./CountButton";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count >= 1) setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <CountButton
        title="Increase +"
        onClick={increaseCount}
        className="btn btn-primary mx-2"
      />
      <CountButton
        title="Decrease -"
        onClick={decrease}
        className="btn btn-danger mx-2"
      />
    </div>
  );
};

export default Counter;
