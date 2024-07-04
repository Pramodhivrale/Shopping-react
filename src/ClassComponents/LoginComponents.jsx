import React from "react";
import { render } from "@testing-library/react";

export class LoginClassComponents extends React.Component 
{
    constructor(){
        super();
    }

    handelClick(e){
       alert(`
        Button id : ${e.target.id}
        `)
    }
  render() {
    return (
      <div className="container-fluid mt-5">
        <button name="button" id="2" onClick={this.handelClick}>Login</button>
      </div>
    );
  }
}
