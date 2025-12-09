import { useFetcher } from 'react-router';

const API_URL = 'https://react-fast-pizza-api.jonas.io/api';

function UpdateOrderPriority() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH">
      <button>Make priority</button>
    </fetcher.Form>
  );
}

export default UpdateOrderPriority;

export async function action({ params }) {
  const data = { priority: true };
  const res = await fetch(`${API_URL}/order/${params.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok)
    throw new Error('Can not update your order priority right now...');

  return null;
}
