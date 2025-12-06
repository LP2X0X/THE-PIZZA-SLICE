import { useDispatch } from "react-redux";
import UpdateItemQuantity from "../order/UpdateItemQuantity";
import { deleteItem } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <li>
      <h4>{`${item.quantity} x ${item.name}`}</h4>
      <p>{item.totalPrice}</p>
      <UpdateItemQuantity id={item.id} quantity={item.quantity} />
      <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
    </li>
  );
}

export default CartItem;
