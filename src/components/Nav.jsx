// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "../components/Nav.scss";

function Nav({ onToogleChange }) {
  return (
    <>
      <div>
        <nav>
          <li>
            <a href="#" onClick={() => onToogleChange("home")}>
              Home
            </a>{" "}
          </li>
          <li>
            <a href="#" onClick={() => onToogleChange("list")}>
              List Contacts
            </a>{" "}
          </li>
          <li>
            <a href="#" onClick={() => onToogleChange("add")}>
              Add User
            </a>{" "}
          </li>
        </nav>
      </div>
    </>
  );
}

export default Nav;
