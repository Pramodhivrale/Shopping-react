import React from "react";

export class LoginTemplate extends React.Component{

    constructor(props){
        super();
    }

    render(){
        return(
            <div className="container-fluid">
                <h3>{this.props.title}</h3>
                <dl>
                    <dt>Email</dt>
                    <dd><input type={this.props.type} /></dd>
                    <dt>Password</dt>
                    <dd><input type="number" name="" id="" /></dd>
                    <button>Login</button>
                </dl>
            </div>
        )
    }
}

export class ClassPropertiesDemo extends React.Component{

  

    render(){
        return(
          <div>
            <LoginTemplate type="email" title="Login here"/>
          </div>
        )
    }
}