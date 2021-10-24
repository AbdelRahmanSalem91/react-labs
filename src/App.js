import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CounterPage from "./pages/CounterPage";
import NavbarComponent from "./components/navbar/NavbarComponent";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <div className="container">
          <Switch>
            <Route component={HomePage} path="/" exact />
            <Route component={ShopPage} path="/shop" exact />
            <Route component={DetailsPage} path="/shop/:id" />
            <Route component={CounterPage} path="/counter" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
