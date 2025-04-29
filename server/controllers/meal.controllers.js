/** @format */
import Meal from "../models/meal.model.js";

async function test(req, res) {
  res.json({ message: "connected" });
}

async function createMeal(req, res) {
  try {
    const meal = await Meal.create(req.body);
    // 200 for successful posts requests
    return res.status(201).json(meal);
  } catch (err) {
    return res.status(500).json(err);
  }
}
async function getAllMeals(req, res) {
  try {
    const allMeals = await Meal.find();
    // 200 for successful get requests
    return res.status(200).json(allMeals);
  } catch (err) {
    return res.status(500).json(err);
  }
}
async function getOneMealById(req, res) {
  try {
    const id = req.params.id;
    const meal = await Meal.findById(id);
    // 200 for successful get requests
    return res.status(200).json(meal);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function deleteById(req, res) {
  try {
    const id = req.params.id;
    await Meal.deleteOne({ _id: id });
    const updatedMealList = await Meal.find();
    return res.status(200).json(updatedMealList);
  } catch (err) {
    return res.status(500).json(err);
  }
}
async function updateMealById(req, res) {
  try {
    const id = req.params.id;
    const updatedMeal = await Meal.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    return res.status(200).json(updatedMeal);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export {
  test,
  createMeal,
  getAllMeals,
  getOneMealById,
  deleteById,
  updateMealById,
};
