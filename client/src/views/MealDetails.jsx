/** @format */

import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const MealDetails = (props) => {
  const [meal, setMeal] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/meals/${id}`)
      .then((res) => {
        console.log(res);
        setMeal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/meals/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch(err);
  };

  return (
    <>
      <div className="">
        <Nav dishName={meal.dishName} />
        <div className="card-body container">
          <h2> Total Minutes: </h2>

          <p>{meal.totalMinutes}</p>
          <br />
          <h2>Ingredients:</h2>
          <ul className="container-fluid ">
            {meal.ingredientOne && <p>{meal.ingredientOne}</p>}
            {meal.ingredientTwo && <p>{meal.ingredientTwo}</p>}
            {meal.ingredientThree && <p>{meal.ingredientThree}</p>}
          </ul>
          <br />
          <h2>Directions:</h2>
          <p>{meal.directions}</p>
          <button
            className="btn btn-danger"
            onClick={() => deleteHandler(meal._id)}>
            Delete {meal.title}
          </button>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default MealDetails;
