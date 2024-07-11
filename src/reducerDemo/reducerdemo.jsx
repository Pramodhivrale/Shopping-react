import { type } from "@testing-library/user-event/dist/type";

const { act, useReducer } = require("react");


let initialState={count:0};

function reducer(state,action){
    switch(action.type){
        case "join":
            return{count :state.count + 1}
        case "exit":
            return{count : state.count -1}    
    }
}

export function ReducerDemo(){

    const[state,dispatch]=useReducer(reducer,initialState);

    function handaleJoinClick(){
       dispatch({type:'join'});
    }

    function handleExitClick(){
       dispatch({type:'exit'});
    }

    return (
     <div>
         <h2>Vedio streaming</h2>
         <div className="bg-primary text-white p-4 w-25">
            buffering vedio...
         </div>
         <div className="p-4">
          live count :{state.count}
         </div>
         <div className="mt-4 mb-3">
               <button onClick={handaleJoinClick}>join</button>
               <button onClick={handleExitClick}>exit</button>
         </div>
     </div>


    )
}