import { useFetcher } from 'react-router';
import Button from '../../ui/Button';
import styles from './UpdateOrderPriority.module.css';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrderPriority() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === 'submitting';

  return (
    <fetcher.Form method="PATCH" className={styles.form}>
      <Button type="small">
        {isSubmitting ? 'Marking order priority...' : 'Make priority'}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrderPriority;

export async function action({ params }) {
  try {
    const data = { priority: true };
    await updateOrder(data, params.id);
  } catch (err) {
    console.log(err);
  }
}
