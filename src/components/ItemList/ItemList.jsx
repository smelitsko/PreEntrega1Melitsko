import { useState, useEffect } from "react";

const MAX_ITEMS_TO_SHOW = 10;
const MOCK_PRODUCTS = [
  {
    codigo: 15,
    titulo: "Trilogía de la pasión",
    autor: "Ariana Harwicz",
    editorial: "Mardulce",
    genero: "narrativa contemporánea",
    precio: 20000,
    stock: 8,
    img: "trilogia.jpg",
  },
  {
    codigo: 16,
    titulo: "Poesía completa",
    autor: "Anne Sexton",
    editorial: "Eterna Cadencia",
    genero: "poesía",
    precio: 30000,
    stock: 5,
    img: "poesiasexton.jpg",
  },
  {
    codigo: 17,
    titulo: "El hombre en busca de sentido",
    autor: "Viktor Frankl",
    editorial: "Herder",
    genero: "no ficción",
    precio: 9300,
    stock: 10,
    img: "elhombrenbusca.jpg",
  },
  {
    codigo: 18,
    titulo: "Hábitos atómicos",
    autor: "James Clear",
    editorial: "Eterna Cadencia",
    genero: "no ficción",
    precio: 9300,
    stock: 10,
    img: "habitosatomicos.jpg",
  },
];
function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_PRODUCTS);
      }, 2000);
    });
  };

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        products.map((product) => {
          return (
            <div key={product.codigo}>
              <h3>{product.titulo}</h3>
              <p>${product.precio}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ItemList;
