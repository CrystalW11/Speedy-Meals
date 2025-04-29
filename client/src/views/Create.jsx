/** @format */

import React, { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const Create = (props) => {
  const navigate = useNavigate();
  const [dishName, setDishName] = useState("");
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [directions, setDirections] = useState("");
  const [ingredientOne, setIngredientOne] = useState("");
  const [ingredientTwo, setIngredientTwo] = useState("");
  const [ingredientThree, setIngredientThree] = useState("");
  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const newMeal = {
      dishName,
      totalMinutes,
      directions,
      ingredientOne,
      ingredientTwo,
      ingredientThree,
    };
    axios
      .post(`http://localhost:8000/api/meals`, newMeal)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          setErrors(err.response.data.errors); // Capture validation errors from the backend
        } else {
          console.log(err);
        }
      });
  };

  return (
    <>
      <Nav title={"Meal Catalog"} />
      <div className="container border">
        <h2>Add the next culinary masterpiece!</h2>
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <div className="container-fluid">
            <label className="form-label">Dish Name:</label>
            <input
              className="form-control"
              type="text"
              onChange={(e) => setDishName(e.target.value)}
              value={dishName}
            />
            {errors.dishName && (
              <p className="text-danger">{errors.dishName.message}</p>
            )}
          </div>
          <div className="container-fluid">
            <label className="form-label">Total Minutes:</label>
            <input
              className="form-control"
              type="number"
              onChange={(e) => setTotalMinutes(e.target.value)}
              value={totalMinutes}
            />
            {errors.totalMinutes && (
              <p className="text-danger">{errors.totalMinutes.message}</p>
            )}
          </div>
          <div className="container-fluid">
            <label className="form-label">Directions:</label>
            <input
              className="form-control"
              type="text"
              onChange={(e) => setDirections(e.target.value)}
              value={directions}
            />
            {errors.directions && (
              <p className="text-danger">{errors.directions.message}</p>
            )}
          </div>
          <br />
          <h2>Ingredient(s) - Optional</h2>
          <div className="container-fluid">
            <label className="form-label">Ingredient One</label>
            <input
              className="form-control"
              type="text"
              onChange={(e) => setIngredientOne(e.target.value)}
              value={ingredientOne}
            />
            <br />
          </div>
          <div className="container-fluid">
            <label className="form-label">Ingredient Two</label>
            <input
              className="form-control"
              type="text"
              onChange={(e) => setIngredientTwo(e.target.value)}
              value={ingredientTwo}
            />
            <br />
          </div>
          <div className="container-fluid">
            <label className="form-label">Ingredient Three</label>
            <input
              className="form-control"
              type="text"
              onChange={(e) => setIngredientThree(e.target.value)}
              value={ingredientThree}
            />
            <br />
          </div>
          <div>
            <button className="btn btn-primary">Add Meal</button>
          </div>
          <br />
        </form>
      </div>
    </>
  );
};

export default Create;
