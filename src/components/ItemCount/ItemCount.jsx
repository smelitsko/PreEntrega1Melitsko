import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock }) => {
  let [cartItems, setCartItems] = useState(1);

  const sumar = () => {
    cartItems < stock && setCartItems(cartItems + 1);
  };

  const restar = () => {
    cartItems > 0 && setCartItems(cartItems - 1);
  };
  return (
    <div className="item__count__container">
      <button className="up__down" onClick={restar}>
        -
      </button>
      <h3>{cartItems}</h3>
      <button className="up__down" onClick={sumar}>
        +
      </button>
    </div>
  );
};
export default ItemCount;
