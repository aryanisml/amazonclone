// import logo from "./logo.svg";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";
import "./App.css";
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
          <Header />
            <h1>Checkout</h1>
            <Product />
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
