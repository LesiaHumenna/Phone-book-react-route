// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "../components/Nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">ListContacts</Link>
          </li>
          <li>
            <Link to="/formAdd">FormAddUser</Link>
          </li>
          <li>
            <Link to="/edit">Edit</Link>
          </li>
        </nav>
      </div>
    </>
  );
}

export default Nav;
