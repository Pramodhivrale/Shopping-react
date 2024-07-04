import { useState } from "react";

export function DataBinding(){

    const[userName,setUsername]=useState();

    function handelOnChange(event){
      setUsername(event.target.value);

    }
    return(

        <div className="container-fluid">
        <dl>
            <dt>Name</dt>
            <dd><input type="text" value={userName} onChange={handelOnChange} /></dd>
        </dl>
        <dd> Hello ! {userName}</dd>
        </div>
    )



}