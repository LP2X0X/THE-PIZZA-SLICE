import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import { getTotalCartPrice, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  const quantity = useSelector(getTotalQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const location = useLocation();

  const isAtCartLocation = location.pathname.includes("cart");

  return (
    <div>
      <p>
        <span>{`${quantity} ${quantity > 1 ? "Pizzas" : "Pizza"}`}</span>
        <span>{`$${totalCartPrice}`}</span>
      </p>
      {!isAtCartLocation && <Link to="/cart">Open Cart</Link>}
    </div>
  );
}

export default CartOverview;
