
export function LoginComponent(props){

    return(
        <div className="container-fluid">
            <form className="border border-2 m-2 p-3 h-25 w-25">
                <h3 ><span className="bi bi-person-fill mb-3"></span> {props.title}</h3>
               <dl>
                <dt>{props.login_titel}</dt>
                <dd>
                  <input type={props.login_type} className="form-control" />
                </dd>
                <dt>Password</dt>
                <dd>
                    <input type="password" className="form-control" />
                </dd>
                <button className="btn btn-primary w-100 mt-3">{props.button_title}</button>
               </dl>

            </form>

        </div>
    )
}