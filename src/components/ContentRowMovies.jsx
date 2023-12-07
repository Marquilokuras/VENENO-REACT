import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import NotFound from "./NotFound";

function ContentRowMovies() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUser, setTotalUser] = useState({});
  const [totalCategories, setTotalCategories] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4200/api/products/list")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setTotalProducts(data.meta.count);

        // Calculate the total number of unique categories
        const categories = data.products.map((product) => product.category);
        const uniqueCategories = new Set(categories);
        setTotalCategories(uniqueCategories.size);
      })
      .catch((error) => {
        <NotFound/>
      });

    fetch("http://localhost:4200/api/users/list")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const totalUsers = {
          title: "Total de Usuarios",
          color: "warning",
          quantity: data.meta.count.toString(), 
          icon: "fa-user-check",
        };
      setTotalUser(totalUsers);
      })
      .catch((error) => {
        <NotFound/>
      });
  }, []);

  const totalProduct = {
    title: "Total de Productos",
    color: "primary",
    cuantity: totalProducts,
    icon: "fa-clipboard-list",
  };

  const totalCategory = {
    title: "Total de Categorias",
    color: "success",
    cuantity: totalCategories,
    icon: "fa-solid fa-list",
  };

  const cartProps = [totalProduct, totalCategory, totalUser];

  return (
    <div className="row">
      {cartProps.map((product, i) => {
        return <SmallCard {...product} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;
