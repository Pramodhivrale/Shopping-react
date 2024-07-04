import { useParams,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function ShoppingDetails() {
  const params = useParams();
  const [productde, setproduct] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${params.prodId}`,
    }).then((response) => {
      setproduct(response.data);
    });
  }, [params.prodId]);

  return (
    <div className="container-fluid">
      <h2>Products details</h2>
      <dl>
        <dt>Title</dt>
        <dd>{productde.title}</dd>
        <dt>Preview</dt>
        <dd><img src={productde.img} width="100" height="100" alt="" /></dd>
        <dt>Price</dt>
        <dd>{productde.price}</dd>
      </dl>
      <div>
        <p>
            <Link to={`/products/${productde.category}`}>Back to</Link>
        </p>
      </div>
    </div>
  );
}
