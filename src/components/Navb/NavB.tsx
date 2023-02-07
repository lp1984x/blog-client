import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/Context";
import { Icats } from "../../models";

export default function NavB() {
  const [cats, setCats] = useState([]);
  const { user } = useContext(MyContext);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <Nav className="me-auto">
      <Link to="/" className="nav-link">
        Home
      </Link>

      {user && (
        <Link to="/write" className="nav-link">
          Write
        </Link>
      )}

      <NavDropdown
        title="Categories"
        id="basic-nav-dropdown"
        menuVariant="dark"
      >
        {cats.map((c: Icats, i) => (
          <NavDropdown.Item href="#" key={i}>
            <Link
              to={`/?cat=${c.name}`}
              style={{ all: "unset", cursor: "pointer" }}
            >
              {c.name}
            </Link>
          </NavDropdown.Item>
        ))}
      </NavDropdown>

      <Link to="/about" className="nav-link">
        About
      </Link>
    </Nav>
  );
}
