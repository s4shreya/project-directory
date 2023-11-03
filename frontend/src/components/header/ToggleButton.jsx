import { useState, useEffect } from "react";
import { Switch } from "@mui/material";
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import styles from './ToggleButton.module.css';

const ToggleButton = () => {
  const [theme, setTheme] = useState("dark");

  const changeThemeHandler = (event) =>
    setTheme(event.target.checked ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={styles.toggle}>
      <LightModeTwoToneIcon />
      <Switch onChange={changeThemeHandler} checked={theme === "dark"} />
      <DarkModeTwoToneIcon />
    </div>
  );
};
export default ToggleButton;
