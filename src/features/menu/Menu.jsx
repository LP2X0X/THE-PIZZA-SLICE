import { useLoaderData } from 'react-router';
import MenuItem from './MenuItem';
import styles from './Menu.module.css';
import { getMenu } from '../../services/apiRestaurant';

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className={styles.menu}>
      {menu.map((item) => (
        <MenuItem pizza={item} key={item.id} />
      ))}
    </ul>
  );
}

export default Menu;

export async function loader() {
  const menu = await getMenu();
  return menu;
}
