import { useState } from "react";

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import styles from "./ProjectCard.module.css";
import butterfly from "../../images/butterfly.jpg";

const ProjectCard = (props) => {
  const [butterflyClass, setButterflyClass] = useState("no-display");
  const project = props.project;

  const titleStyle = {
    fontSize: 40,
    color: "darkslateblue",
    textShadow: "5px 5px 5px hotpink",
  };

  const butterflyDisplayHandler = () => {
    setButterflyClass("display");
    setTimeout(() => {
      setButterflyClass("no-display");
    }, 3500);
  };

  return (
    <Card className={styles.card} id={styles.projectCard}>
      <CardContent>
        <Typography sx={titleStyle}>{project.name}</Typography>
        <img
          src={project.image}
          alt="screenshot of my mess meal website"
          width={500}
          height={200}
          className={styles.image}
        />
        <Typography>{project.description}</Typography>
        <div className={styles.row}>
          <Typography className={styles.col}>
            Tech stack
            <LaptopMacIcon className={styles.icon} />
          </Typography>
          {project.technologiesUsed.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              className={`${styles.col} ${styles.tags}`}
            />
          ))}
        </div>
        <div className={styles.row}>
          <a
            href={project.deploymentLink}
            target="blank"
            title="deployment link"
            className={styles.link}
          >
            <Typography
              className={`${styles.col} ${styles["deployment-link"]}`}
            >
              Deployment Link
              <LaunchIcon className={styles.icon} />
            </Typography>
          </a>
          <a
            href={project.sourceCode}
            target="blank"
            className={styles.link}
            title="source code"
          >
            <Typography className={styles.col}>
              Source Code
              <CodeIcon className={styles.icon} />
            </Typography>
          </a>
        </div>
        <div
          className={
            butterflyClass === "no-display"
              ? styles["butterfly-icon"]
              : styles["butterfly-icon-displayed"]
          }
        >
          <PlayCircleIcon
            fontSize="large"
            // style={{ color: "green", cursor: "pointer" }}
            title="click to see animation"
            onClick={butterflyDisplayHandler}
          />
          
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
          <img src={butterfly} alt="butterfly" width={60} height={40} />
        </div>
      </CardContent>
    </Card>
  );
};
export default ProjectCard;
