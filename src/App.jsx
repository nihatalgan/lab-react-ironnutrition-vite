import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFoodForm";
import "./App.css";

function App() {
  const [foods, setProducts] = useState(foodsJson);
  const [foodsData, setProductsData] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });

    setProducts(filteredFoods);
  };

  const addNewFood = (food) => {
    const updatedFoods = [...foods, food];
    const updatedFoodsData = [...foodsData, food];

    setProducts(updatedFoods); // update the state variable "movies" with updatedMovies
    setProductsData(updatedFoodsData);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFood addFood={addNewFood} />

      {/* <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1,
        }}
      /> */}

      {foods.map((food) => {
        return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />;
      })}
    </div>
  );
}

export default App;
