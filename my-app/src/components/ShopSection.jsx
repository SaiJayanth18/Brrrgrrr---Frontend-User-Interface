import React, { useState } from 'react';
import TotalBill from './TotalBill';
import onion from "./Onion.jpg";
import toma from "./tomato.jpeg";
import Lettuce from "./lettuce.jpg";
import quin from "./quinoa.jpg";
import chpa from "./chicpatty.jpg";
import turk from "./Turk.jpeg";
import jala from "./jala.jpg";
import checheese from "./checheese.jpg";
import blue from "./blue.jpg";
function ShopSection() {
  const [boxes, setBoxes] = useState([
    { 
        index:1,
        title: 'Onions', 
        imageUrl: onion,
        cost: 20,
        selected: false,
        quantity: 1
    },
    { 
        index:2,
        title: 'Tomatoes', 
        imageUrl: toma,
        cost: 30,
        selected: false,
        quantity: 1
    },
    { 
        index:3,
        title: 'Lettuce', 
        imageUrl: Lettuce,
        cost: 20,
        selected: false,
        quantity: 1
    },
    { 
        index:4,
        title: 'Grain-Quinoa Patty', 
        imageUrl: quin,
        cost: 60,
        selected: false,
        quantity: 1
    },
    { 
        index:5,
        title: 'Chicken Breast', 
        imageUrl: chpa,
        cost: 85,
        selected: false,
        quantity: 1
    },
    { 
        index:6,
        title: 'Turkey(Patty)', 
        imageUrl: turk,
        cost: 95,
        selected: false,
        quantity: 1
    },
    { 
        index:7,
        title: 'Jalapenos', 
        imageUrl: jala,
        cost: 15,
        selected: false,
        quantity: 1
    },
    { 
        index:8,
        title: 'Cheddar Cheese', 
        imageUrl: checheese,
        cost: 30,
        selected: false,
        quantity: 1
    },
    { 
        index:9,
        title: 'Blue Cheese', 
        imageUrl: blue,
        cost: 40,
        selected: false,
        quantity: 1
    }
  ]);

  const handleCheckboxChange = (index) => {
    setBoxes(prevBoxes => 
        prevBoxes.map(item=>
        item.index===index?{...item, selected: !item.selected}: item
     )
    );
  };

  const handleQuantityChange = (index, value) => {
    setBoxes(prevBoxes => 
        prevBoxes.map(item =>
            item.index===index ? {...item, quantity: parseInt(value,10) } : item
            )
    );
  };

  const handleCalculateBill = () => {
    const totalBill = boxes.reduce((total, box) => {
      if (box.selected) {
        return total + (box.cost * box.quantity);
      }
      return total;
    }, 0);

    alert(`Total Bill: Rs.${totalBill}`);
  };

  return (
    <div className="shop-section">
      {boxes.map((box, index) => (
        <div className="box" key={index}>
          <div className="box-content">
            <h2>{box.title}</h2>
            <div className="box-image" style={{ backgroundImage: `url(${box.imageUrl})` }}></div>
            <div className="box-cost">Cost: Rs.{box.cost}</div>
            <label>
              <input
                type="checkbox"
                checked={box.selected}
                onChange={() => handleCheckboxChange(box.index)}
              />
              Select
            </label>
            <input
              type="number"
              value={box.quantity}
              onChange={(e) => handleQuantityChange(box.index, e.target.value)}
              min="1"
            />
          </div>
        </div>
      ))}
      <div className="total-bill">
        <TotalBill items={boxes} />
        <button onClick={handleCalculateBill}>Order</button>
      </div>
    </div>
  );
}

export default ShopSection;
