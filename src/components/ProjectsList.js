import axios from "axios";
import { useEffect, useState } from "react"
// import Project from "./Project";
import ProjectCard from "./ProjectCard";

function ProjectsList() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    getProjects();
  }, [])

  const getProjects = () => {
    axios.get('http://localhost:3000/projects')
    .then(response => {
      setProjects(response.data.data);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  console.log(projects);
  return(
    <>
      <h1 class="d-flex justify-content-center shadow-sm mt-4 p-4">Projects</h1>
      { projects &&
          (
            projects.map((project) => {
                return <ProjectCard key = {project.id} project = {project} />
              })
          )
      }
    </>
  );
}

export default ProjectsList;
