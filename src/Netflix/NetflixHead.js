
export function NetflixHead() {
    return (
      <div className="headDiv">
        <div className="brandName">NETFLIX</div>
        <div className="d-flex" id="language">
          <div>
            <select
              className="form-select-sm me-3 btn btn-dark"
              id="#selectToggle"
            >
              <option value="">Language</option>
              <option value="">Hindi</option>
              <option value="">English</option>
            </select>
          </div>

          <div>
            <button className="btn btn-danger">SignIn</button>
          </div>
        </div>
      </div>
    );
  }