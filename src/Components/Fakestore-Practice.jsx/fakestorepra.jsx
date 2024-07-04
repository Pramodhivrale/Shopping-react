import { useState,useEffect } from "react";
import './fakestore.css';
import axios from "axios";

export function FakeStore(){
   
    const [categories,AllCategories]=useState([]);
    const [products,allproducts]=useState([]);
    const [addcard,seletedProducts]=useState([]);
    const [count,productCount]=useState(0);

    useEffect(()=>{
        Getcategories();
        LoadAllProducts("https://fakestoreapi.com/products");

    },[]);

    
      function deletecarditem(e){
        alert(`${e.target.id} clicked`);
        
        for(var property in addcard){
            
            if( property === e.target.id){
              addcard.splice(property,1);
            }
            alert(`removed`);
        }
       
      
        

      }
     function getcardcount(){
        productCount(addcard.length);
     }

    function AddtoCard(e){
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then((response)=>response.json())
        .then((data)=>{
           addcard.push(data);
           getcardcount();
           alert(`${e.target.title} Added to cart`);

        })
    }
    function LoadCategory(e){
         if(e.target.value==="ALL"){
            LoadAllProducts("https://fakestoreapi.com/products");
         }else{
            LoadAllProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
         }
    }
    function LoadAllProducts(url){
        fetch(url)
        .then(response=> response.json())
        .then((data)=>{
            allproducts(data);
        })
    }
    function Getcategories()
    {
        // fetch("https://fakestoreapi.com/products/categories")
        // .then(Response=>Response.json())
        // .then(data=>{
        //     data.unshift("ALL");
        //        AllCategories(data);
        // })
        axios.get("https://fakestoreapi.com/products/categories")
        .then(function(response){
            response.data.unshift("ALL");
            AllCategories(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            
        })
       
    }
       return(
        <div className="container-fluid">
        <header className="d-flex justify-content-around p-2 bg-dark text-white">
            <h3>FakeStore</h3>
            <nav>
               <span className="bi bi-search me-3"></span>
               <span className="bi bi-person me-3"></span>
               <span className="bi bi-heart me-3"></span>
               <button data-bs-target="#modal" data-bs-toggle="modal"><span className="bi bi-cart me-3"></span>
               <span>{count}</span>
               </button>
            </nav>
        </header>
       <div className="row">
       <div className="col-3 mt-3">
         <h5 className="form-lable ms-2">Select Categoty</h5>
         <select className="form-select" onChange={LoadCategory}>
             {
                      categories.map((Productcategories) => (
                      <option value={Productcategories} key={Productcategories}>{Productcategories.toUpperCase()}</option>
                      ))
              }
        </select>

        </div>
        <div className="col-9 mt-3 d-flex flex-wrap justify-content-between w-25" id="card">
           <h3>Products</h3>
          {
           products.map((data) => (
            <div className="card m-2 p-2" key={data.id} >
                <img src={data.image} alt={data.title} className="card-img-top"/>
                <div className="card-header">
                    <p>{data.title}</p>
                </div>
                <div className="card-body">
                    <label>Price: ${data.price}</label>
                    <br />
                    <label>Rating: {data.rating.rate}</label>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={AddtoCard} id={data.id}>
                        <span className="bi bi-cart"></span> Add to cart
                    </button>
                </div>
                <div className="modal fade" id="modal">
                 <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                           <h3 className="text-primery">Your card items</h3>
                           <button className="btn btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Name </th>
                                        <th>Privew</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        addcard.map(data=>
                                            <tr key={data.id}>
                                                <td>{data.title}</td>
                                                <td><img src={data.image} alt="" width="100" height="100" /></td>
                                                <td>{data.price}</td>
                                                <td>
                                                    <button className="bi bi-trash btn btn-danger" onClick={deletecarditem} id={data.id}>

                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                                <tfoot>
                                             <button className="btn btn-primary" data-bs-dismiss="modal">Ok</button>
                                             <button className="btn btn-danger" data-bs-dismiss="modal">Cancle</button>
                                </tfoot>
                            </table>
                      </div>
                    </div>

                 </div>
                </div>
            </div>
        ))
    }
</div>

       </div>
       </div>
       
       )
    
}
