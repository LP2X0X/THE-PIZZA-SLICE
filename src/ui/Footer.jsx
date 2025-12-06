import { useSelector } from "react-redux";
import CartOverview from "../features/cart/CartOverview";
import { getTotalQuantity } from "../features/cart/cartSlice";

function Footer() {
  const totalQuantity = useSelector(getTotalQuantity);

  return <footer>{totalQuantity > 0 && <CartOverview />}</footer>;
}

export default Footer;
