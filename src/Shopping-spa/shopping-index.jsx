import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import { ShoppingHome } from "./ShoppingHome";
import {AllProducts} from "./Shopping-Products"
import { ShoppingDetails } from "./ShoppingDetails";

export function Shoppingindex(){
    return(
        <div className="container-fluid">
          <BrowserRouter>
          <header className="bg-dark text-white p-2 m-2 d-flex justify-content-between">
            <div>
               Shopper .
            </div>
            <div>
                <span className="me-2 "><Link to="home" className="text-white text-decoration-none">Home</Link></span>
                <span className="me-2">Mens clothing</span>
                <span className="me-2">Womens clothing</span>
                <span className="me-2">Jwellary</span>
                <span className="me-2"><Link to="electronics" className="text-white text-decoration-none">Electronics</Link></span>
            </div>
            <div>
                <span className="bi bi-person-fill me-2"></span>
                <span className="bi bi-search me-2"></span>
                <span className="bi bi-heart me-2"></span>
                <span className="bi bi-cart4 me-2"></span>
            </div>
          </header>
           <section className="mt-3 overflow-auto"  style={{height :'500px'}}>
           <Routes>
            <Route path="/" element={
                <ShoppingHome/>
            } /> 
            <Route path="home" element={<ShoppingHome/>} />
            <Route path="*" element={<div>Not Found..</div>}/>
            <Route path="/products/:catName" element={<AllProducts/>}/>
            <Route path="/details/:prodId" element={<ShoppingDetails/>}/>
           
          </Routes>
           </section>
          </BrowserRouter>
      
        </div>
    )
}