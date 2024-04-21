import "./App.css";
import Brand from "./components/Brand/Brand";
import NavBar from "./components/NavBar/NavBar";
import ButtonNavBar from "./components/ButtonNavBar/ButtonNavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { useState } from "react";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  const [visible, setVisible] = useState(window.innerWidth > 750);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className="header__wrapper">
        <div className="brand__navbar__wrapper">
          <Brand />
          {(visible || window.innerWidth >= 750) && <NavBar />}
        </div>
        <ButtonNavBar callback={handleClick} />
      </div>

      <ItemListContainer greeting={"Bienvenidos a LiberArt"} />
    </div>
  );
}

export default App;
