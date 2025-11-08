import React, { useState } from "react";

function Counter({ start = 0, step = 1 }) {
  // Local state
  const [count, setCount] = useState(start);

  return (
    <div className="card">
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount((c) => c + step)}>+{step}</button>
      <button onClick={() => setCount((c) => c - step)}>-{step}</button>
      <button onClick={() => setCount(start)}>Reset</button>
    </div>
  );
}
export default Counter;