import { useFormik } from "formik"
import axios from "axios"
import { Navigate, useNavigate,Link } from "react-router-dom"
import { useState } from "react";

export function TutorialRegister(){

    const navigate=useNavigate();
    const [users,setUsers]=useState([]);
    const [error,setError]=useState('');
    const formik=useFormik({
        initialValues:{
            UserId :"",
            UserName :"",
            Password:"",
            Age:0,
            Email:"",
            Mobile:""
        },
      onSubmit:(values)=>{
        axios({
            method:"post",
            url:"http://127.0.0.1:5000/register",
            data:values
        })
        alert("Registered succesfully !")
        navigate("/login")

      }
    })

    function verifyPassword(e){
        axios({
            maxRate :"get",
            url:"http://127.0.0.1:5000/customer"
        })
        .then(response=>{
           setUsers(response.data);
           for(var user of users){
            if(user.UserId===e.target.value){
              setError('User id is taken');
              break;
            }else{
                setError("user is available");
                
            }
           }
        })
    }
    return(
        <div>
            <h2>User register</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" name="UserId" onKeyUp={verifyPassword} onChange={formik.handleChange}></input></dd>
                    <dd>{error}</dd>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange}></input></dd>
                    <dt>Password</dt>
                    <dd><input type="Password" name="Password" onChange={formik.handleChange}></input></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age" onChange={formik.handleChange}></input></dd>
                    <dt>Email</dt>
                    <dd><input type="mail" name="Email" onChange={formik.handleChange}></input></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange}></input></dd>
                </dl>
                <button>Register</button>
            </form>
            <p>
                <Link to="/login">Existing user login</Link>
            </p>
        </div>
    )
}