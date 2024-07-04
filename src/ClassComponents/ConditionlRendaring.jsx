import React from "react";

export class Template extends React.Component{

    constructor(props){
        super();
    }

    render(){
       if(this.props.layout==="Horizantal"){
        return(
            <nav>
                <div className="bi bi-facebook mb-3"></div>
                <div className="bi bi-linkedin mb-3"></div>
                <div className="bi bi-twitter mb-3"></div>
                <div className="bi bi-instagram mb-3"></div>
            </nav>
        )
       }
       else{
         return(
            <nav className="d-flex p-4">
            <div className="bi bi-facebook mb-3 m-2"></div>
            <div className="bi bi-linkedin mb-3 m-2"></div>
            <div className="bi bi-twitter mb-3 m-2"></div>
            <div className="bi bi-instagram mb-3 m-2"></div>
      </nav>
         )
       }
    }
}

export class ConditionalRendering extends React.Component{

    constructor(){
        super();
        this.state={
            viewLayout :''
        };
        this.handelChnage=this.handelChnage.bind(this);
    }
    handelChnage(e){
        this.setState({
            viewLayout : e.target.value
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <div>
                <h2>Select a toolbar</h2>
                <select onChange={this.handelChnage} className="form-select w-25">
                <option value="-1">Select Layout</option>
                 <option value="Horizantal">Horizantal</option>
                 <option value="Vertical">Vertical</option>
                </select>
                </div>
          <h3>Toolbar</h3>
          <Template layout={this.state.viewLayout}/>
            </div>
        )
    }
}