/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DisplayAll = (props) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/meals")
      .then((res) => {
        console.log(res.data);
        setMeals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h2 style={{ color: "black" }}>
          Find inspiration with these delicious meals!
        </h2>
        <table
          className="table table-striped"
          style={{
            backgroundColor: "transparent", // Transparent table background
            borderCollapse: "collapse", // Ensure borders are correctly styled
            width: "60%", // Adjust width to 80% of the container
            margin: "0 auto", // Center the table horizontally
          }}>
          <thead>
            <tr>
              <th style={{ backgroundColor: "transparent" }}>Meal</th>
              <th style={{ backgroundColor: "transparent" }}>Prep Time</th>
              <th style={{ backgroundColor: "transparent" }}>Options</th>
            </tr>
          </thead>
          <tbody>
            {meals.map((meal) => (
              <tr key={meal._id} style={{ backgroundColor: "transparent" }}>
                <td style={{ backgroundColor: "transparent" }}>
                  {meal.dishName}
                </td>
                <td style={{ backgroundColor: "transparent" }}>
                  {meal.totalMinutes}
                </td>
                <td style={{ backgroundColor: "transparent" }}>
                  <Link to={`/meals/${meal._id}/details`}>Meal Details</Link> |{" "}
                  <Link to={`/meals/${meal._id}/edit`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayAll;