import React from "react";
import SmallCard from "./SmallCard";
import NotFound from "./NotFound";

let totalProduct = {};
let totalCategory = {};
let totalUser = {};

/*  Cada set de datos es un objeto literal */
fetch("http://localhost:3000/api/products/")
  .then((response) => response.json())
  .then((data) => {
    // Manipular los datos obtenidos
    console.log(data);

    totalProduct = {
      title: "Total de Productos",
      color: "primary",
      cuantity: 21,
      icon: "fa-clipboard-list",
    };

    totalCategory = {
      title: " Total de Categorias",
      color: "success",
      cuantity: "79",
      icon: "fa-solid fa-list",
    };
  })
  .catch((error) => {
    <NotFound></NotFound>;
    console.error("Error al obtener los datos:", error);
  });

fetch("http://localhost:3000/api/users/")
  .then((response) => response.json())
  .then((data) => {
    // Manipular los datos obtenidos
    console.log(data);

    totalUser = {
      title: "Total de Usuarios",
      color: "warning",
      cuantity: "49",
      icon: "fa-user-check",
    };
  })
  .catch((error) => {
    <NotFound></NotFound>;
    console.error("Error al obtener los datos:", error);
  });

let cartProps = [totalProduct, totalCategory, totalUser];

function ContentRowMovies() {
  return (
    <div className="row">
      {cartProps.map((product, i) => {
        return <SmallCard {...product} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;