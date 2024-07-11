import userEvent from "@testing-library/user-event";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";

export function TutorialVedios(){

    const [Cookies,setCookies,removeCookies]=useCookies();
    const navigate=useNavigate();
    useEffect(()=>{
        if(Cookies.UserId===""){
            navigate("/login");
        }
    })

    function handelSignout(){
        removeCookies("UserId");
        navigate("/login");
    }
    return(
        <div>
            <h2>Home Tutorial vedios-{Cookies.UserId}</h2>
            <h2><button className="btn btn-link" onClick={handelSignout}>Sign-out</button></h2>
        </div>
    )
}