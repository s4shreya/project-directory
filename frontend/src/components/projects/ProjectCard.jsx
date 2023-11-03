import { Card, CardActions, CardContent, Typography } from "@mui/material";
import styles from './ProjectCard.module.css';

const ProjectCard = (props) => {
  const project = props.project;
  return (
    <Card className={styles.card} id={styles.projectCard}>
      <CardContent>
        <Typography>{project.name}</Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
export default ProjectCard;
