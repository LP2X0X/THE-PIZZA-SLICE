function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          {quantity} x {name}
        </p>
        <p>${totalPrice}</p>
      </div>

      <p>{isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}</p>
    </li>
  );
}

export default OrderItem;
