import { GridComponent } from "../Customized-Grid/gridComponent"
//import { LoginComponent } from "../loginComponent/loginComponent"

export function Home(){
    return(
        <div className="container-fluid">
          < GridComponent tHeading="Emp Table" feilds={["First name","Last name","Salery"]} data={[{'First name':'Pramod','Last name':'Hivrale','salery':'152525'}]}/>
          <hr />
          <GridComponent tHeading="Product table" feilds={["Name","Price"]} data={[{'Tv':'Samsung','Price':'85296.01'}]}/>
        </div> 
    )
}




// export function Home(){
//     return(
//         <div className="container-fluid">
//            <h2>Admin login</h2>
//             < LoginComponent title="Admin login" login_titel="Your email" login_type="email" button_title="Admin login" />
//             < LoginComponent title="Customer login" login_titel="Your mobile" login_type="number" button_title="Customer login"/>
//         </div>
//     )
// }