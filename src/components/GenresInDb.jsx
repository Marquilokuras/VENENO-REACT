import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";

function GenresInDb() {
  const [lastUser, setLastUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4200/api/users/list")
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        if (users.length > 0) {
          const latestUser = users[users.length - 1];
          setLastUser(latestUser);
        }
      })
      .catch((error) => {
        <NotFound />;
      });
  }, []);

  if (!lastUser) {
    return <div>Cargando...</div>;
  }

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="container">
      <div className="row justify-content-center" style={{ marginTop: "20px" }}>
        <div className="col-lg-12 text-center mb-4">
          <h1>Detalle del Último Usuario</h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="card shadow mb-4" style={{ margin: "10px" }}>
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              {capitalizeFirstLetter(lastUser.name)}
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "40rem" }}
                src={"http://localhost:4200/img/users/"+lastUser.image}
                alt= {capitalizeFirstLetter(lastUser.name)}
              />
            </div>
            <p>Nombre: {capitalizeFirstLetter(lastUser.name)}</p>
            <p>Apellido: {capitalizeFirstLetter(lastUser.lastname)}</p>
            <p>Email: {lastUser.email}</p>
            <p>Rol: {capitalizeFirstLetter(lastUser.role)}</p>
            <p>Género: {capitalizeFirstLetter(lastUser.gender)}</p>
            <p>Dirección: {capitalizeFirstLetter(lastUser.address)}</p>
            <p>Edad: {lastUser.age} años</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
