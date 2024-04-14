import CartIcon from "../cart-icon/CartIcon";
import "./CartWidget.css";
import { useState } from "react";

function CartWidget() {
  const [cartItems, setCartItems] = useState(7);
  return (
    <div>
      <CartIcon ancho={40} alto={40} />
      <span>{cartItems}</span>
    </div>
  );
}

export default CartWidget;
