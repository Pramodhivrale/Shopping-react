import React, { useState, useEffect } from "react";
import "./fakestore.css";

export function FakestoreComponent() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cardcount,setCardCount]= useState(0);
  const [cardItems,setCardItems]=useState([]);

   
  function deleteCart(e){
    alert(`${e.target.title} clicked`);
  }
  function handelAddToCardClick(e){
    fetch(`https://fakestoreapi.com/products/${e.target.id}`)
    .then(function(response){
       return response.json();
    })
    .then(data=>{
      cardItems.push(data);
      GetCardCount();
    })

  }
  function GetCardCount()
  {
    setCardCount(cardItems.length);
  }

  useEffect(() => {
    ProductLoad();
    AllProducts("https://fakestoreapi.com/products");
    GetCardCount();
  }, []);

  function AllProducts(url) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  function ProductLoad() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        data.unshift("ALL");
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }

  function handleCategoryChange(event) {
    const selectedCategory = event.target.value;
    if (selectedCategory === "ALL") {
      AllProducts("https://fakestoreapi.com/products");
    } else {
      AllProducts(`https://fakestoreapi.com/products/category/${selectedCategory}`);
    }
  }

  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between p-4 bg-dark text-white">
        <div>FAKESTORE</div>
        <div id="nav-links">
          <span className="me-4"></span>
          {categories.map((category) => (
            <span className="me-4" key={category}>{category.toUpperCase()}</span>
          ))}
        </div>
        <div>
          <span className="bi bi-heart me-3"></span>
          <span className="bi bi-heart me-3"></span>
          <button data-bs-target="#cart" data-bs-toggle="modal" className=" position-relative me-3  "><span className="bi bi-person  me-3"></span>
          <span className="rounded-circle">{cardcount}</span>
          </button>
          <span className="bi bi-search me-3"></span>
        </div>
      </header>
      <section>
        <div className="row mt-4">
          <nav className="col-3">
            <div>
              <label className="form-label">
                Select category
              </label>
              <div>
                <select onChange={handleCategoryChange} className="form-select" >
                  {categories.map((category) => (
                    <option value={category} key={category}>
                      {category.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </nav>

          <main className="col-9">
            <div className="d-flex flex-wrap justify-content-between">
              {products.map((data) => (
                <div key={data.id} className="card m-2 p-2">
                  <img src={data.image} alt="" className="card-img-top" />
                  <div className="card-header">
                    <p className="card-title">{data.title}</p>
                  </div>
                  <div className="card-body">
                    <dl>
                      <dt>Price</dt>
                      <dd>{data.price}</dd>
                      <dt>Rating</dt>
                      <dd>
                        <span className="bi bi-star-fill"></span>
                        {data.rating.rate}
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-danger w-100" onClick={handelAddToCardClick} id={data.id}>
                      <span className="bi bi-cart4"></span> Add to Cart
                    </button>
                    
                  </div>
                </div>
              ))}
            </div>
          </main>
          <div className="modal fade" id="cart">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                              <h2 className="text-primary"> Your card items</h2>
                              <button data-bs-dismiss="modal" className="btn btn-close"></button>
                          </div>
                          <div className="modal-body">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th>Titel</th>
                                    <th>Priview</th>
                                    <th>Price</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    cardItems.map(data=>
                                      <tr key={data.id}>
                                        <td>{data.title}</td>
                                        <td><img src={data.image} height="50" width="50" alt="" /></td>
                                        <td>{data.price}</td>
                                        <td><button className="bi bi-trash btn btn-danger" onClick={deleteCart}></button></td>
                                      </tr>
                                    )
                                  }
                                </tbody>
                              </table>
                          </div>
                        </div>
                      </div>
                    </div>
        </div>
      </section>
    </div>
  );
}
