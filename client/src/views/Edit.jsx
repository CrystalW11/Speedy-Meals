/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { useNavigate, useParams, Link } from "react-router-dom";


const Edit = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dishName, setDishName] = useState("");
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [directions, setDirections] = useState("");
  const [ingredientOne, setIngredientOne] = useState("");
  const [ingredientTwo, setIngredientTwo] = useState("");
  const [ingredientThree, setIngredientThree] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/meals/${id}`)
      .then((res) => {
        console.log(res);
        setDishName(res.data.dishName);
        setTotalMinutes(res.data.totalMinutes);
        setDirections(res.data.directions);
        setIngredientOne(res.data.ingredientOne);
        setIngredientTwo(res.data.ingredientTwo);
        setIngredientThree(res.data.ingredientThree);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedMeal = {
      dishName,
      totalMinutes,
      directions,
      ingredientOne,
      ingredientTwo,
      ingredientThree,
    };
    axios
      .put(`http://localhost:8000/api/meals/${id}`, updatedMeal)
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
      <Nav dishName={`Update ${dishName}`} />
      <Link to={`/meals/${id}/details`}>
        <button className="btn btn-primary">View Meal Details</button>
      </Link>
      <br />
      <br />
      <div className="container ">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <div className="container-fluid">
            <label className="form-label">Dish Name:</label>
            <input
              className="form-control "
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
          <div className="container-fluid">
            <label className="form-label">Ingredient One</label>
            <br />
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
            <br />
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
            <br />
            <input
              className="form-control"
              type="text"
              onChange={(e) => setIngredientThree(e.target.value)}
              value={ingredientThree}
            />
            <br />
          </div>
          <div>
            <button className="btn btn-primary">Update Recipe</button>
          </div>
          <br />
        </form>
        <div className="mt-3"></div>
      </div>
    </>
  );
};

export default Edit;
