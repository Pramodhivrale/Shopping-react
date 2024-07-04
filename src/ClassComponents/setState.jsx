import { render } from "@testing-library/react";
import React from "react";

export class StateDemo extends React.Component{

    constructor(){
        super();
        this.state={
            msg :""
        }
        this.handelClick=this.handelClick.bind(this);
    }

    handelClick(){
      this.setState({
        msg :"Login clicked"
      })
    }
    render() {

        return(
           <div>
              <button onClick={this.handelClick}>Login</button>
              <h4>{this.state.msg}</h4>
           </div>
         

        );
    }
}