// Your code here

function FoodBox(props) {
  return (
    <div className="food_details">
      <p>{props.food.name}</p>

      <img className="food_img" src={props.food.image} />

      <p>Calories: {props.food.calories}</p>
      <p>Servings: {props.food.servings}</p>

      <p>
        <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
      </p>

      <button
        onClick={() => props.deleteFood(props.food.id)}
        className="btn-delete"
      >
        Delete
      </button>
    </div>
  );
}

export default FoodBox;
