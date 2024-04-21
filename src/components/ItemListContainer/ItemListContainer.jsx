import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h2>{greeting}</h2>
      <ItemCount stock={5} />
    </div>
  );
}
export default ItemListContainer;
