import React from "react";

function ProductCard({ name, price }) {
  const inRupees = `₹${price.toLocaleString("en-IN")}`;
  return (
    <div className="card">
      <h4>{name}</h4>
      <p>Price: {inRupees}</p>
      <button>Buy</button>
    </div>
  );
}

export default ProductCard;