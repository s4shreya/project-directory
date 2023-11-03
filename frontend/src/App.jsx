import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${styles.header}`}>
        <Header />
      </div>
      <div className={`${styles.item} ${styles.main}`}>
        <Projects />
      </div>
      <div className={`${styles.item} ${styles.footer}`}>
        <Footer />
      </div>
    </div>
  );
};
export default App;
