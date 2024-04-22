const product = {
  codigo: 15,
  titulo: "Trilogía de la pasión",
  autor: "Ariana Harwicz",
  editorial: "Mardulce",
  genero: "narrativa contemporánea",
  precio: 20000,
  stock: 8,
  img: "trilogia.jpg",
};

const { titulo, autor, precio, img } = product;
const Item = ({ product }) => {
  return (
    <div>
      <h3>product.titulo</h3>
      <p>product.precio</p>
    </div>
  );
};

export default Item;
