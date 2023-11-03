import Switch from "./ToggleButton"
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <Switch />
    </div>
  )
}
export default Header