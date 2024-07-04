import { useState } from "react";

export function StyleBinding(){

    const [styleObject,setStyleObject]=useState({'border':'','boxShadow':''});
    const [username,setUsername]=useState(' ');


    function VerifyName(e){
        setUsername(e.target.value);
        if(username===""){
            setStyleObject({
                border:'2px solid red',
                boxShadow:'2px 2px 2px red'
            })
        }
        else{
            setStyleObject({
                border:'2px solid green',
                boxShadow:'2px 2px 2px green'
            })

        }


    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>Username :</dt>
                <dd><input type="text" onBlur={VerifyName} style={styleObject} /></dd>
                <dd></dd>
            </dl>
        </div>
    )

}