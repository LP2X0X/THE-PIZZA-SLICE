import { useFetcher, useLoaderData } from 'react-router';
import CountDownTimer from './CountDownTimer';
import OrderItem from './OrderItem';
import { useEffect, useState } from 'react';
import UpdateOrderPriority from './UpdateOrderPriority';

const API_URL = 'https://react-fast-pizza-api.jonas.io/api/order';

function Order() {
  const [hasOrderArrived, setHasOrderArrived] = useState(false);
  const loaderData = useLoaderData();
  const fetcher = useFetcher();

  const isLoadingIngredients = fetcher.state === 'loading';

  useEffect(
    function () {
      // If we don't have a condition here
      // When Order first mount, fetcher's load methods get called
      // which change other properties of fetcher itself
      // which makes it a different object
      // which cause an infinite loops since fetcher is in our dependency array
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
      // When the action of the route corresponding to this component run
      // This effect will get executed again even though the pizza menu data from the loader of the menu route does change
      // We could use context api to set the data for Order component to use
    },
    [fetcher]
  );

  const {
    id,
    status,
    priority,
    cart,
    orderPrice,
    priorityPrice,
    estimatedDelivery,
  } = loaderData.data;

  return (
    <article>
      <h2>Order #{id} status</h2>

      <div>
        {priority && <p>priority</p>}
        <p>{status} order</p>
      </div>

      <CountDownTimer
        estimatedDelivery={estimatedDelivery}
        setHasOrderArrived={setHasOrderArrived}
      />

      <ul>
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={isLoadingIngredients}
            ingredients={
              fetcher.data?.find((pizza) => pizza.id === String(item.pizzaId))
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>

      <div>
        <p>Price of pizzas: ${orderPrice}</p>
        {priorityPrice > 0 && <p>Priority price: ${priorityPrice}</p>}
        <p>To pay on delivery: ${orderPrice + priorityPrice}</p>
      </div>

      {!priority && !hasOrderArrived && <UpdateOrderPriority />}
    </article>
  );
}

export default Order;

export async function loader({ params }) {
  const res = await fetch(`${API_URL}/${params.id}`);

  if (!res.ok) {
    throw new Error('There is something wrong when getting order detail...');
  }

  const data = await res.json();
  return data;
}
