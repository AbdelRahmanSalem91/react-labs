import "./navbarComponent.css";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center bg-primary p-3">
      <Link className="link logo fw-bolder" to="/">
        Logo
      </Link>
      <ul className="list-unstyled d-flex justify-content-center align-items-center mb-0">
        <li className="me-3">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="me-3">
          <Link className="link" to="/shop">
            Shop
          </Link>
        </li>
        <li className="me-3">
          <Link className="link" to="/counter">
            Counter
          </Link>
        </li>
        <li>
          <Link className="link" to="/todos">
            TODOS
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavbarComponent;
