import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand as={Link} to="/">
            Easy Rent a Car
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" style={{ color: "#ffff" }}>
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/reservations" style={{ color: "#ffff" }}>
                Mis Reservas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/reservations">
            <Reservations />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
