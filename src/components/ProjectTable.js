import { Table } from "react-bootstrap";

function ProjectTable(props) {
  return(
    <div>
      <Table striped bordered hover variant="dark" className='m-2'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.project.id}</td>
            <td>{props.project.title}</td>
            <td>{props.project.description}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ProjectTable;
