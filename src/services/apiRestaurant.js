const API_URL = 'https://react-fast-pizza-api.jonas.io/api';
const FAKE_URL = 'http://localhost:9000';

export async function getMenu() {
  try {
    const res = await fetch(`${FAKE_URL}/menu`);

    if (!res.ok) throw new Error('Failed to fetch pizzas data...');

    const menu = await res.json();

    return menu;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}

export async function getOrder(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);

    if (!res.ok) {
      throw new Error(`Couldn't find order #${id}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    });

    if (!res.ok) {
      throw new Error('Sending order failed...');
    }

    const data = await data.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function updateOrder(data, id) {
  try {
    const data = { priority: true };
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok)
      throw new Error('Can not update your order priority right now...');

    return null;
  } catch (err) {
    console.log(err);
  }
}
