import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import { Form } from "react-router";

function CreateOrder() {
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <Form method="POST">
      <h2>Ready to order? Let's go!</h2>
      <section>
        <label>First name</label>
        <input type="text" name="first-name"></input>
      </section>

      <section>
        <label>Phone number</label>
        <input type="number" name="phone-number"></input>
      </section>

      <section>
        <label>Address</label>
        <input type="text" name="address"></input>
      </section>

      <section>
        <input type="checkbox" name="priority"></input>
        <label>Want to give your order priority?</label>
      </section>

      <input value={JSON.stringify(cart)} hidden></input>
      <button>Order now from ${totalCartPrice}</button>
    </Form>
  );
}

export default CreateOrder;

export function action({ request }) {
  console.log(request);
  request.formData();
}
