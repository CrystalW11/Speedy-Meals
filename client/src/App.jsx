/** @format */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import MealDetails from "./views/MealDetails";
import Create from "./views/Create";
import Edit from "./views/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals/:id/details" element={<MealDetails />} />
        <Route path="/create" element={<Create />} />
        <Route path="/meals/:id/edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
