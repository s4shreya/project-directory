import GitHubIcon from "@mui/icons-material/GitHub";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <span>
        <h3 className={styles.title}>Developed by Shreya Dhingra</h3>
        <a href="https://github.com/s4shreya" target="blank">
          <GitHubIcon className={styles.icon} />
        </a>
      </span>
    </footer>
  );
};
export default Footer;
