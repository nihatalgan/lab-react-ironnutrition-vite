// Your code here
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm({ addFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newFood = {
      id,
      name,
      image,
      calories,
      servings,
    };
    addFood(newFood);
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div className="add_food">
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameInput}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleImageInput}
          />
        </div>
        <div>
          <label>Calories</label>
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          />
        </div>
        <div>
          <label>Servings</label>
          <input
            type="number"
            name="servings"
            value={servings}
            onChange={handleServingsInput}
          />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
