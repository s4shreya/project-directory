import projectList from "./ProjectList";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      {projectList.map((project) => (
        <ProjectCard key={project.no} project={project} />
      ))}
    </div>
  );
};
export default Projects;
