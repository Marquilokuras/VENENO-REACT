import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4200/api/products/list")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setTotalProducts(data.meta.count);
      })
      .catch((error) => {
        <NotFound></NotFound>;
      });
  }, []);

  // Función para capitalizar la primera letra de cada palabra en una cadena
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center" style={{ marginTop: "20px" }}>
          <div className="col-lg-12 text-center mb-4">
            <h1>Listado de Productos</h1>
            <h2>Total de Productos {totalProducts}</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="card shadow mb-4"
              style={{ margin: "10px" }}
            >
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  {capitalizeFirstLetter(product.name)}
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: "40rem" }}
                    src={"http://localhost:4200/img/"+product.image}
                    alt={product.name}
                  />
                </div>
                <p>Descripcion: {capitalizeFirstLetter(product.description)}</p>
                <p>Precio: {product.price}</p>
                <p>Categoria: {capitalizeFirstLetter(product.category)}</p>
                <p>Genero: {capitalizeFirstLetter(product.gender)}</p>
                <p>Stock: {product.amount}</p>
                <p>Descuento: {product.discount}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
