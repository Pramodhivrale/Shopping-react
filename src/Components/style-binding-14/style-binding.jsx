import { useState } from "react";

export function StyleBinding14(){

    const[styles,setStyles]=useState({'fontSize':'10px','color':'balck'});

    function handelFontChange(e){
     setStyles({
        fontSize:e.target.value + "px",
        fontColor:styles.color
     })
    }
    function handelColourChange(e){
        setStyles({
            fontSize:styles.fontSize,
            color:e.target.value
        })
    }

    return(

        <div>
            <dl>
                <dt>Font size</dt>
                <dd>
                <input type="range" min="10" max="100" onChange={handelFontChange}/>
                </dd>
                <dt>font color</dt>
                <dd>
                    <input type="color" className="text-center" onChange={handelColourChange} />
                </dd>
            </dl>
            <p className="text-center" style={styles}>Sample text</p>
        </div>
        
    )
}