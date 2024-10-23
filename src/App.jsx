import { useState } from "react";
import "./App.css";
import Banner from "./component/header/Banner";
import Navbar from "./component/header/Navbar";
import Cards from "./component/main/cards";
import OurRecipes from "./component/main/OurRecipes";
import Sidebar from "./component/main/Sidebar";

function App() {
  const [recipes, setRecipe] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [time, setTime] = useState(0);
  const [calorie, setCalorie] = useState(0);

  const handleCookBtn = (recipe) => {
    const isExists = recipes.find((rec) => rec.recipe_id == recipe.recipe_id);
    if (isExists) {
      alert("Recipe Already Cooking");
    } else {
      setRecipe([...recipes, recipe]);
    }
  };

  const handlePreparingBtn = (id) => {
    const deletedRecipe = recipes.find((recipe) => recipe.recipe_id == id);

    const cookingRecipe = recipes.filter((recipe) => recipe.recipe_id !== id);
    setRecipe(cookingRecipe);
    setCooking([...cooking, deletedRecipe]);
  };

  const totalCalorieTime = (TotalTime, TotalCalorie) => {
    setTime(time + TotalTime);
    setCalorie(calorie + TotalCalorie);
  };

  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <OurRecipes />
        <div className="flex">
          <Cards handleCookBtn={handleCookBtn} />
          <Sidebar
            recipes={recipes}
            handlePreparingBtn={handlePreparingBtn}
            cooking={cooking}
            totalCalorieTime={totalCalorieTime}
            time={time}
            calorie={calorie}
          />
        </div>
      </main>
    </>
  );
}

export default App;
