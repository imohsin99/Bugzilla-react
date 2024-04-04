import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProjectCard (props) {

  console.log(props.project);

  return (
    <>
      <div className='m-3'>
        <Card>
          <Card.Header>ID: {props.project.id}</Card.Header>
          <Card.Body>
            <Card.Title>{props.project.title}</Card.Title>
            <Card.Text>{props.project.description}</Card.Text>
            <Link to={`/projects/${props.project.id}`} className='btn btn-sm btn-outline-dark px-4 mt-2 shadow'>Show</ Link>
          </Card.Body>
          <Card.Footer>
            <Link to={`/projects/${props.project.id}/bugs`} className="text-decoration-none text-muted">Bugs</Link>
          </Card.Footer>
        </Card>
      </div>
    </>
  )
}

export default ProjectCard

