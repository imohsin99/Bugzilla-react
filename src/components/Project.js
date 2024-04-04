import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectTable from './ProjectTable';
import UsersTable from './UsersTable';

function Project (props) {
  const [project, setProject] = useState();
  const [users, setUsers] = useState();

  const {id} = useParams();

  useEffect(() => {
    const getProject = () => {
      axios.get(`http://localhost:3000/projects/${id}`)
      .then((response) => {
        setProject(response.data.data);
        setUsers(response.data.users);
      })
      .catch(error => console.error(`Error: ${error}`))
    }

    getProject();
  }, [id, project]);

  console.log(project);

  return (
    <>
      { project &&
        <div>
          <ProjectTable project = {project} />
          <Link to={`/projects/${project.id}/bugs`} className='btn btn-sm btn-outline-dark px-4 my-4'>Show Bugs</ Link>
          <h4>Assigned Users</h4>
          {
            users &&
            users.map((user) => {
              return <UsersTable key = {user.id} user = {user} />
            })
          }
        </div>
      }
    </>
  )
}

export default Project
