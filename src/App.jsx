import "./App.css";
import Banner from "./component/header/Banner";
import Navbar from "./component/header/Navbar";
import Cards from "./component/main/cards";
import OurRecipes from "./component/main/OurRecipes";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <OurRecipes />
        <div className="flex">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </>
  );
}

export default App;
