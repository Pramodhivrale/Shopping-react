import { useFormik } from "formik"
import * as yup from "yup";

export function YupDemo(){

    const formik=useFormik({
        initialValues:{
            UserName : "",
            Age :0,
            City : " ",
            Mobile:""
        },
        onSubmit : (values)=>{
          alert(JSON.stringify(values));
        },
        validationSchema:yup.object({
            "UserName":yup.string()
            .required("Username is requried")
            .min(4,"Name is too short...")
            .max(10),
            "Age":yup.number()
                     .required("Age is requried")
        })
           
        
    })

    return(
        <div className="container-fluid">
        <h2>Register</h2>
        <form onSubmit={formik.handleSubmit} >
         <dl>
            <dt>Name</dt>
            <dd><input type="text" name="UserName" onChange={formik.handleChange}  /></dd>
            <dd className="text-danger">{formik.errors.UserName}</dd>
            <dt>Age</dt>
            <dd><input type="text" name="Age"  onChange={formik.handleChange} /></dd>
            <dd className="text-danger">{formik.errors.Age}</dd>
            <dt>City</dt>
            <dd>
                <select   name="City" onChange={formik.handleChange}>
                    <option value="-1">Chose City</option>
                    <option value="Nanded">Nanded</option>
                    <option value="Hyd">Hydrbad</option>
                </select>
            </dd>
            <dd className="text-danger"></dd>
            <dt>Mobile</dt>
            <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
            <dd className="text-danger"></dd>
         </dl>


         <button>Register</button>

        </form>

    </div>
    )
}