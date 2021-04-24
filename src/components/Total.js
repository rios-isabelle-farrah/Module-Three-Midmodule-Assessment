import React from "react";

const Total = ({ total, tax }) => {
  return (
    <div >
      <p>Subtotal: ${total.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Total: ${(total + tax).toFixed(2)}</p>
    </div>
  );
};

export default Total;
