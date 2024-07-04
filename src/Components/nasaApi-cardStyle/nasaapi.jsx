import { useEffect,useState } from "react";
import "./nasa.css";

export function NasaCardComponent()
{
   const [mars, setMars] = useState({ photos: [] });

    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(function(response){
            return response.json()
        })
        .then((data)=>{
             setMars(data);
        })
    },[])
  
      return(
        <div class="container-fluid">
           {
              mars.photos.map(item=>
                <div key={item.id} className="card mt-2 mb-2 d-flex">
                     <div className="card-header">
                        <p>id{item.id}</p>
                        <p>{item.rover.name}</p>
                     </div>
                     <div className="card-body">
                        <img src={item.img_src}  height="200px" width="200px"  alt="" className="img-fluid" />
                     </div>
                     <div className="card-footer">
                     <p>{item.camera.full_name}</p>
                     </div>
                </div>    
              )
           }
           
        </div>
      )
   
    
}