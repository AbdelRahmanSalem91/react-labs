import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const ProductDetails = ({ match }) => {
  useEffect(() => {
    getProductDetails();
  }, []);
  const [details, setDetails] = useState(null);
  const getProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => setDetails(json));
  };
  console.log(match);
  return (
    <>
      {details ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="w-50">
            <img className="w-75" src={details.image} alt={details.title} />
          </div>
          <div className="w-50">
            <h2>{details.title}</h2>
            <p>{details.description}</p>
            <p>{details.price}</p>
          </div>
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
      )}
    </>
  );
};

export default ProductDetails;
