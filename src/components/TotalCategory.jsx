import React, { useEffect, useState } from "react";

function TotalCategory() {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4200/api/products/list")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Obtener todas las categorías de los productos
        const products = data.products;

        // Crear un objeto para almacenar el recuento de productos por categoría
        const productsByCategory = {};
        products.forEach((product) => {
          productsByCategory[product.category] =
            (productsByCategory[product.category] || 0) + 1;
        });

        // Convertir el objeto en un array de objetos para facilitar su renderizado
        const categoriesArray = Object.keys(productsByCategory).map(
          (categoryName) => ({
            categoryName:
              categoryName.charAt(0).toUpperCase() + categoryName.slice(1), // Capitalizar la primera letra
            totalProducts: productsByCategory[categoryName],
          })
        );

        setCategoriesData(categoriesArray);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de productos:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 text-center mb-4">
          <h1 style={{ marginTop: "20px" }}>
            Total de Productos por Categoría
          </h1>
        </div>
      </div>

      <div className="row justify-content-center">
        {categoriesData.map((category, index) => (
          <div
            key={index}
            className="card shadow mb-4"
            style={{ margin: "10px" }}
          >
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                {category.categoryName}
              </h5>
            </div>
            <div className="card-body">
              <p>Total de Productos: {category.totalProducts}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TotalCategory;
