import { Table } from "react-bootstrap";

function UsersTable(props) {
  return(
    <div>
      <Table striped bordered hover variant="dark" className='m-2'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.user.id}</td>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
            <td>{props.user.user_type}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default UsersTable;
