import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return (
    <div className="row">
      {products.map((product) => {
        return products.length > 0 ? (
          <div key={product.id} className="col-lg-4 mt-5">
            <Card style={{ width: "22rem" }} className=" py-5 h-100">
              <Link to={`/shop/${product.id}`}>
                <Card.Img
                  className="w-50 mx-auto"
                  variant="top"
                  src={product.image}
                />
              </Link>
              <Card.Body>
                <Card.Title className="text-nowrap text-truncate">
                  {product.title}
                </Card.Title>
                <Card.Text className="text-nowrap text-truncate">
                  {product.description}
                </Card.Text>
                <Card.Text>
                  <b>Price: </b>
                  {product.price}
                </Card.Text>
                <Card.Text>
                  <b>Rate: </b>
                  {product.rating.rate}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <div className="mt-5 pt-5">
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>{" "}
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
