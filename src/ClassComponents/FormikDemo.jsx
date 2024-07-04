
import { useFormik } from "formik"

export function FormikDemo(){

    function UserValidation(formBody){

        var errors = {};

        if(formBody.UserName===""){
            errors.UserName="User Name requried";
        }
        else if(formBody.UserName.length < 4){
            errors.UserName="Name to short enter more charcater"
        }
        else{
            errors.UserName="";
        }

        if(isNaN(formBody.Age)){
            errors.Age="Age must be a number";
        }
        else{
            errors.Age="";
        }
        return errors;
    }


    const formik = useFormik({
        initialValues :{
            UserName : "",
            Age :0,
            City : " ",
            Mobile:""

        },
        validate:UserValidation,
        onSubmit :(values)=>{
            alert(JSON.stringify(values));
        }
    })

    return(

        <div className="container-fluid">
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit}>
             <dl>
                <dt>Name</dt>
                <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                <dd className="text-danger">{formik.errors.UserName}</dd>
                <dt>Age</dt>
                <dd><input type="text" name="Age" onChange={formik.handleChange} /></dd>
                <dd className="text-danger">{formik.errors.Age}</dd>
                <dt>City</dt>
                <dd>
                    <select onChange={formik.handleChange}  name="City">
                        <option value="-1">Chose City</option>
                        <option value="Nanded">Nanded</option>
                        <option value="Hyd">Hydrbad</option>
                    </select>
                </dd>
                <dd className="text-danger">{formik.errors.City}</dd>
                <dt>Mobile</dt>
                <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                <dd className="text-danger">{formik.errors.Mobile}</dd>
             </dl>


             <button>Register</button>

            </form>

        </div>
    )
}