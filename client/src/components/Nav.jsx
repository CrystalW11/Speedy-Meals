/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { dishName } = props;

  return (
    <>
      <header className="flex-fill">
        <nav className="d-flex justify-content-around">
          <div className="card-label">
            <Link className="" to={"/"}>
              Back to home
            </Link>
            <br />
            <br />
            <Link className="btn btn-primary" to={"/create"}>
              Add Meal
            </Link>
            <br />
            <br />
          </div>
          <div className="">
            <h1 style={{ color: "white" }}>Speedy Meals</h1>
          </div>
        </nav>
        <div>
          <h1>{dishName}</h1>
        </div>
      </header>
    </>
  );
};

export default Nav;
