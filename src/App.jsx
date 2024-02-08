import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import "./App.css";

function App() {
  const [foods, setProducts] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });

    setProducts(filteredFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

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
