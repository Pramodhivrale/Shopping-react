import { Link } from "react-router-dom";

export function TutorialError(){

    return(
        <div className="container-fluid">
          <h3 className="text-bg-danger">Not found-Invalid</h3>

          <p>
            <Link to="/login">back to login</Link>
          </p>
        </div>
    )
}