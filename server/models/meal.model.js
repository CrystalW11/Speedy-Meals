/** @format */

import { Schema, model } from "mongoose";

const mealSchema = new Schema(
  {
    dishName: {
      type: String,
      required: [true, "Dish name required!"],
      minlength: [3, "Dish name must be a minimum of 3 characters!"],
      maxlength: [20, "Dish name must be no more then 20 characters!"],
    },
    totalMinutes: {
      type: Number,
      required: [true, "Dish cook time required!"],
      min: [2, "Dish must be a minimum of 2 minutes!"],
      max: [240, "Dish must be no more then 240 minutes!"],
    },
    directions: {
      type: String,
      required: [true, "Dish directions required!"],
      minlength: [10, "Dish characters must be a minimum of 10 characters!"],
      maxlength: [150, "Directions must me no more then 150 characters"],
    },
    ingredientOne: {
      type: String,
      // required: [true, "Dish directions required!"],
      // minlength: [10, "Dish characters must be a minimum of 10 characters!"],
      // maxlength: [150, "Directions must me no more then 150 characters"],
    },
    ingredientTwo: {
      type: String,
      // required: [true, "Dish directions required!"],
      // minlength: [10, "Dish characters must be a minimum of 10 characters!"],
      // maxlength: [150, "Directions must me no more then 150 characters"],
    },
    ingredientThree: {
      type: String,
      // required: [true, "Dish directions required!"],
      // minlength: [10, "Dish characters must be a minimum of 10 characters!"],
      // maxlength: [150, "Directions must me no more then 150 characters"],
    },
  },
  { timestamps: true }
);
const Meal = model("Meal", mealSchema);
export default Meal;
