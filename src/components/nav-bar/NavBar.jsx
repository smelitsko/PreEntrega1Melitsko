import CartWidget from "../cart-widget/CartWidget";
import CategoryList from "../category-list/CategoryList";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar__wrapper">
      <CategoryList />
      <CartWidget />
    </div>
  );
}

export default NavBar;
