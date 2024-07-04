import { useState } from "react";

export function ClassBindingComponent(){

    const[cities]=useState(["Pune","Satara","Mumbai","Delhi","Thane"]);
    const[buttonClass,setButtonClass]=useState('bi bi-sort-alpha-down');

    function handelSort(e){
        if(e.target.className==="bi bi-sort-alpha-down"){
            setButtonClass('bi bi-sort-alpha-up')
            cities.sort();
        }
        else{
           setButtonClass("bi bi-sort-alpha-down")
           cities.sort();
           cities.reverse();
        }
    }

    return(
        <div className="container-fluid mt-3">
         <h4>List of cities <button className="btn btn-success" onClick={handelSort}> <span className={buttonClass}></span> </button> </h4>
         <dl>
            {
                cities.map((cities)=>
                <li key={cities}>{cities}</li>
                )
            }
         </dl>
        </div>
    )
}