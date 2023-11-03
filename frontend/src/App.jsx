import styles from './App.module.css';
import Header from './components/header/Header';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${styles.header}`}><Header /></div>
      <div className={`${styles.item} ${styles.main}`}>m</div>
      <div className={`${styles.item} ${styles.footer}`}>f</div>
    </div>
  )
}
export default App