import Card from 'react-bootstrap/Card';

function BugCard (props) {

  console.log(props.bug);

  return (
    <>
      <div className='m-3'>
        <Card>
          <Card.Header>ID: {props.bug.id}</Card.Header>
          <Card.Body>
            <Card.Title>{props.bug.title}</Card.Title>
            <Card.Text>{props.bug.description}</Card.Text>
            <Card.Text>Type: {props.bug.bug_type}</Card.Text>
            <Card.Text>Status: {props.bug.status}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default BugCard

