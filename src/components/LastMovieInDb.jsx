import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";

function LastMovieInDb(){
    const [lastProduct, setLastProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4200/api/products/list")
      .then((response) => response.json())
      .then((data) => {
        const products = data.products;
        if (products.length > 0) {
            const latestProduct = products[products.length - 1];
            setLastProduct(latestProduct);
        }
      })
      .catch((error) => {
        <NotFound/>
      });
  }, []);

  if (!lastProduct) {
    return <div>Cargando...</div>; 
  }

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="container">
      <div className="row justify-content-center" style={{ marginTop: "20px" }}>
        <div className="col-lg-12 text-center mb-4">
          <h1>Detalle del Último Producto</h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="card shadow mb-4" style={{ margin: "10px" }}>
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              {capitalizeFirstLetter(lastProduct.name)}
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "40rem" }}
                src={"http://localhost:4200/img/"+lastProduct.image}
                alt={lastProduct.name}
              />
            </div>
            <p>Descripción: {capitalizeFirstLetter(lastProduct.description)}</p>
            <p>Precio: {lastProduct.price}</p>
            <p>Categoría: {capitalizeFirstLetter(lastProduct.category)}</p>
            <p>Género: {capitalizeFirstLetter(lastProduct.gender)}</p>
            <p>Stock: {lastProduct.amount}</p>
            <p>Descuento: {lastProduct.discount}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;
