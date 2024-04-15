import "./App.css";
import Brand from "./components/Brand/Brand";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <div className="header__wrapper">
        <Brand />
        <NavBar />
      </div>
      <ItemListContainer greeting={"Bienvenidos a LiberArt"} />
    </div>
  );
}

export default App;
