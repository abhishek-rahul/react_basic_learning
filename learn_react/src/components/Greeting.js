import React from "react";

// Functional component that uses props
function Greeting({ name }) {
  return <h2>Hello, {name || "Guest"} 👋</h2>;
}

export default Greeting;