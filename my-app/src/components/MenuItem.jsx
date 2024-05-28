import React, { useState } from 'react';
import TotalBill from './TotalBill';
import aloo from "./alootikki.jpg";
import chic from "./chicken.png";
import fi from "./fish.png";
import ve from "./vegb.jpg";
import fr from "./fry.jpg";
import pe from "./pepsi.jpg";
import ch from "./cheese.jpg";
import bb from "./bbq.jpg";
import sa from "./salsa.jpg";
import sm from "./spicymayo.jpg";


function MenuApp() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Aloo Tikki', cost: 260, selected: false, img:aloo, quantity: 1},
    { id: 2, name: 'Chicken', cost: 330, selected: false, img:chic, quantity: 1},
    { id: 3, name: 'Fish Fillet', cost: 370, selected: false, img:fi, quantity: 1},
    { id: 4, name: 'Veg Wonder', cost: 240, selected: false, img:ve, quantity: 1},
    { id: 5, name: 'French Fries', cost: 160, selected: false, img:fr, quantity: 1},
    { id: 6, name: 'Pepsi', cost: 50, selected: false, img:pe, quantity: 1},
    { id: 7, name: 'Extra dip: Cheese', cost: 20, selected: false, img:ch, quantity: 1},
    { id: 8, name: 'Extra dip: BBQ', cost: 22, selected: false, img:bb, quantity: 1},
    { id: 9, name: 'Extra dip: Salsa', cost: 24, selected: false, img:sa, quantity: 1},
    { id: 10, name: 'Extra dip: Spicy Mayo', cost: 26, selected: false, img:sm, quantity: 1}
  ]);

  

  

  const handleCheckboxChange = (id) => {
    setMenuItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleQuantityChange = (id, value) => {
    setMenuItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: parseInt(value, 10) } : item
      )
    );
  };

  const handleCalculateBill = () => {
    const totalBill = menuItems.reduce((total, item) => {
      if (item.selected) {
        return total + (item.cost * item.quantity);
      }
      return total;
    }, 0);

    alert(`Total Bill: Rs.${totalBill}`);
  };

  return (
    <div>
      <div className='SM'>
        {menuItems.map(item => (
          <div className="SMdi" key={item.id}>
          <div className='la'>
            <label>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <img className="SMim" src={item.img} alt={item.name} width="100" height="100" />
              
              <div className='SMco'>
                {item.name} - Rs.{item.cost}
              </div>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                min="1"
              />
            </label>
            </div>
          </div>
        ))}
      </div>
      <div className='Bill'>
        <table>
          <tr>
            <td>
              <TotalBill items={menuItems}/>
            </td>
          </tr>
          <tr>
            <td>
              <button className="Billbu" onClick={handleCalculateBill}>
                Order
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MenuApp;


