import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import BugCard from "./BugCard";

function BugList() {
  const [bugs, setBugs] = useState();

  const {project_id} = useParams();

  useEffect(() => {
    const getBugs = () => {
      axios.get(`http://localhost:3000/projects/${project_id}/bugs`)
      .then(response => {
        setBugs(response.data.data);
      })
      .catch(error => console.error(`Error: ${error}`));
    }

    getBugs();
  }, [project_id, bugs]);

  console.log(bugs);
  return(
    <>
      <h1 class="d-flex justify-content-center shadow-sm mt-4 p-4">Bugs</h1>
      { bugs &&
          (
            bugs.map((bug) => {
                return <BugCard key = {bug.id} bug = {bug} />
              })
          )
      }
    </>
  );
}

export default BugList;
