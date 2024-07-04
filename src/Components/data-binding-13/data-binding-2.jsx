import { useState } from "react"

export function DataBindingSecondPart(){

    const[product,setproduct]=useState({name:'',price:0,City:'',Stock:false})

    function handelNameChange(e){
        setproduct({
            name:e.target.value,
            price:product.price,
            City:product.City,
            Stock:product.Stock

        })
    }
    function  handelPriceChange(e){
        setproduct({
            name:product.name,
            price:e.target.value,
            City:product.City,
            Stock:product.Stock

        })
    }
    function handelCityChange(e){

        setproduct({
            name:product.name,
            price:product.price,
            City:e.target.value,
            Stock:product.Stock

        })
    }
    function handelStockChange(e){
        setproduct({
            name:product.name,
            price:product.price,
            City:product.City,
            Stock:e.target.checked

        })
    }

    return(

        <div className="container-fluid">
          <dl>
            <h3>Enter details</h3>
            <dt>Name</dt>
            <dd><input type="text" className="form-control" onChange={handelNameChange} /></dd>
            <dt>Price</dt>
            <dd><input type="number" className="form-control" onChange={handelPriceChange} /></dd>
            <dt>City</dt>
            <dd>
                <select name="City" className="form-select" onChange={handelCityChange}>
                    <option>delhi</option>
                    <option >pune</option>
                </select>
            </dd>
            <dt>Stock</dt>
            <dd className="form-switch"><input type="checkbox" className="form-check-input" onChange={handelStockChange} /> Available</dd>
          </dl>
          <div>
            <h3>Here are details you entered</h3>
            <dl>
                <dt>Name</dt>
                <dd>{product.name}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>City</dt>
                <dd>{product.City}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock === true)?"Available":"Out of stock"}</dd>

            </dl>
          </div>
        </div>
        

    )


}