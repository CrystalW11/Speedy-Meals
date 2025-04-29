/** @format */

import { Router } from "express";
import * as mealController from "../controllers/meal.controllers.js";
const router = Router();
router.route("/test").get(mealController.test);
router
  .route("/meals")
  .get(mealController.getAllMeals)
  .post(mealController.createMeal);
router
  .route("/meals/:id")
  .get(mealController.getOneMealById)
  .delete(mealController.deleteById)
  .put(mealController.updateMealById);

export default router;
