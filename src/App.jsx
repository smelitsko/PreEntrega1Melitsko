import "./App.css";
import Brand from "./components/Brand/Brand";
import useScreenSize from "./components/useScreenSize";
import NavBar from "./components/NavBar/NavBar";
import ButtonNavBar from "./components/ButtonNavBar/ButtonNavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { useState } from "react";
import Item from "./components/Item/Item";

function App() {
  const screenSize = useScreenSize();
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className="header__wrapper">
        <div className="brand__navbar__wrapper">
          <Brand />
          {(screenSize.width >= 750 || visible) && <NavBar />}
        </div>
        <ButtonNavBar callback={handleClick} />
      </div>
      <ItemListContainer greeting={"Bienvenidos a LiberArt"} />
      <Item />
      {/*       <div>
        <h1>Screen Size Detection with React Hook</h1>
        <p>Width: {screenSize.width}</p>
        <p>Height: {screenSize.height}</p>
      </div>
 */}{" "}
    </div>
  );
}

export default App;
