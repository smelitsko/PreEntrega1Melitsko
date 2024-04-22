import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h2>{greeting}</h2>
      <ItemCount stock={5} />
      <ItemList />
    </div>
  );
}
export default ItemListContainer;
