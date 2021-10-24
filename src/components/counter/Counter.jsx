import { useState } from "react";
import CountButton from "./CountButton";
import Card from "react-bootstrap/Card";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count >= 1) setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <Card className="w-75 py-5 mx-auto card">
        <Card.Body>
          <Card.Title className="mb-5 fs-1 count">{count}</Card.Title>
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
          <CountButton
            title="Reset"
            onClick={reset}
            className="btn btn-warning mx-2"
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Counter;
