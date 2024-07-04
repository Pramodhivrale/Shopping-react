
export function GridComponent(props){
   return(
    <div className="container-fluid">
    <h6>{props.tHeading}</h6>
    <table className="table table-hover">
       <thead>
           <tr>
            {
               props.feilds.map((feild)=>
                <th key={feild}>{feild}</th>
            )
            }
           </tr>
       </thead>
       <tbody>
           {
            props.data.map((items)=>
            
                <tr key={items}>
                    {
                       Object.keys(items).map((key)=>
                       <td key={items[key]}>{items[key]}</td>
                    )
                    }
                </tr>
            )
           }
       </tbody>
    </table>

   </div>
   )
}