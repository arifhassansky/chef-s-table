import { useState } from "react";
import "./App.css";
import Banner from "./component/header/Banner";
import Navbar from "./component/header/Navbar";
import Cards from "./component/main/cards";
import OurRecipes from "./component/main/OurRecipes";
import Sidebar from "./Sidebar";

function App() {
  const [recipes, setRecipe] = useState([]);

  const handleCookBtn = (recipe) => {
    const isExists = recipes.find((rec) => rec.recipe_i == recipe.id);
    if (isExists) {
      alert("recipe already cooking");
    } else {
      setRecipe([...recipes, recipe]);
    }
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
          <Sidebar recipes={recipes} />
        </div>
      </main>
    </>
  );
}

export default App;
