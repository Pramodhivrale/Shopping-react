import axios, { Axios } from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";



export function ShoppingHome(){

    const[categories,setCategories]=useState([]);

    useEffect(()=>{
        axios({
            method: "get",
            url :"https://fakestoreapi.com/products/categories",

        })
        .then((response)=>{
            setCategories(response.data);
        })
    },[]);

    return(
        <div className="container-fluid">
            <h2>Categories</h2>
        <ol>
            {
                categories.map(categorie=>
                  <li key={categorie}> <Link to={`/products/${categorie}`}>{categorie.toUpperCase()}</Link></li>
                )
            }
        </ol>
        </div>
    )

}

{/* <div key={product.id} className="card m-2 p-2 " style={{width:'200px'}}>
<img src={product.img} className="card-img-top" alt="" height="150" />
<div className="card-header" style={{height:'140px'}}>
  <p>{product.title}</p>
</div>
</div> */}