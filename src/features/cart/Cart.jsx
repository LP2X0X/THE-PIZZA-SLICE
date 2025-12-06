import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../user/userSlice";
import { clearCart, getCart } from "./cartSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useNavigate } from "react-router";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector(getUserName);
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <article>
      <h3>Your cart, {userName}</h3>
      <ul>
        {cart.map((item) => (
          <CartItem item={item} />
        ))}
      </ul>
      <button onClick={() => navigate("/order/new")}>order pizza</button>
      <button onClick={() => dispatch(clearCart())}>clear cart</button>
    </article>
  );
}

export default Cart;
