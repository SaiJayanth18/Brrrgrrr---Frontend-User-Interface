import React from 'react';

function TotalBill({ items }) {
  const calculateTotalBill = () => {
    return items.reduce((total, item) => {
      if (item.selected) {
        return total + (item.cost * item.quantity);
      }
      return total;
    }, 0);
  };

  return (
    <div>
      Total Bill: Rs.{calculateTotalBill()}
    </div>
  );
}

export default TotalBill;
