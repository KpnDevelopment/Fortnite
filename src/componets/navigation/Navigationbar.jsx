import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navigationbar() {
  const liStyle = {
    color: "white",
    margin: "1rem",
  };

  return (
    <Navbar fixed="top" style={{ zIndex: "1" }} bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">
          <li style={liStyle}>Home</li>
        </Link>
        <Link to="/shop">
          <li style={liStyle}>shop</li>
        </Link>

        <Link to="/about">
          <li style={liStyle}>about</li>
        </Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Navigationbar;
