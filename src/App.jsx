import "./App.css";
import Brand from "./components/Brand/Brand";
import NavBar from "./components/NavBar/NavBar";
import ButtonNavBar from "./components/ButtonNavBar/ButtonNavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const handleClick = () => {
  console.log("Hiciste click");
};

function App() {
  return (
    <div>
      <div className="header__wrapper">
        <div className="brand__navbar__wrapper">
          <Brand />
          <NavBar />
        </div>
        <ButtonNavBar callback={handleClick} />
      </div>

      <ItemListContainer greeting={"Bienvenidos a LiberArt"} />
    </div>
  );
}

export default App;
