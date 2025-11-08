import React, { useState } from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import ProductCard from "./components/ProductCard";
import './App.css';

function App() {
  // STATE: managed inside a component
  const [username, setUsername] = useState("Abhishek");
  const [products] = useState([
    { id: 1, name: "Keyboard", price: 1499 },
    { id: 2, name: "Mouse", price: 799 },
    { id: 3, name: "Headphones", price: 2499 },
  ]);

  return (
    <div className="app">
      {/* JSX: looks like HTML, but inside JavaScript */}
      <h1>React Basics Demo</h1>

      {/* PROPS: passing data down */}
      <Greeting name={username} />

      {/* STATE: update with setState function */}
      <div className="card">
        <label>
          Change Name:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type your name"
          />
        </label>
      </div>

      {/* COMPONENT: reusable counter with internal state */}
      <Counter start={0} step={1} />

      <h2>Products</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} name={p.name} price={p.price} />
        ))}
      </div>
    </div>
  );
}

export default App;
