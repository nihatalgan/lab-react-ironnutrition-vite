import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import "./App.css";

function App() {
  const [foods, setProducts] = useState(foodsJson);
  // console.log(foods[0].name);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {/* <FoodBox /> */}
      <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1,
        }}
      />

      {/* {foods.map((food) => {
        return <p>{food.name}</p>;
      })} */}
    </div>
  );
}

export default App;
