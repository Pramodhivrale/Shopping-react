import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  axios  from "axios";
import { Link } from "react-router-dom";

export function AllProducts() {
  const params = useParams();

  const[products,setProducts]=useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/category/${params.catName}`,
    })
    .then(response =>
    setProducts(response.data)
    )
  },[params.catName]);
  return (
    <div className="container-fluid">
      <h2>{params.catName}Products</h2>
      <div className="d-flex flex-wrap">
        {
            products.map(product=>
                <div key="product.id">
                
                  <Link to={`/details/${product.id}`}>
                  <img className="me-2" src={product.img} width="100" height="100" alt="" />
                  </Link>
                </div>
            )
        }
      </div>
      <div>
        <p>
            <Link to="/home">Back to categories</Link>
        </p>
      </div>
    </div>
  );
}
