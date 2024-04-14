import "./App.css";
import Brand from "./components/brand/Brand";
import NavBar from "./components/nav-bar/NavBar";
import ItemListContainer from "./components/item-list-container/ItemListContainer";

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
