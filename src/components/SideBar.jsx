import React from "react";
import image from "../assets/images/veneno-logo-oficial.jpeg";
import ContentWrapper from "./ContentWrapper";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";
import NotFound from "./NotFound";
import TotalCategory from "./TotalCategory";
import { Link, Route, Switch } from "react-router-dom";
import ProductsList from "./ProductsList";

function SideBar() {
  return (
    <React.Fragment>
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
        style={{ background: "#202020", color: "#9bcf29" }}
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon" style={{ padding: "55px" }}>
            <img className="w-100" src={image} alt="Veneno" />
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt" style={{color: "#9bcf29"}}></i>
            <span style={{color: "#9bcf29"}}>Dashboard - Veneno</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading" style={{color: "#9bcf29"}}>Acciones</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/GenresInDb">
            <span style={{color: "#9bcf29"}}>Ultimo Usuario Creado</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/LastMovieInDb">
            <span style={{color: "#9bcf29"}}>Ultimo Producto Creado</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/TotalCategory">
            <span style={{color: "#9bcf29"}}>Total de Productos por Categoria</span>
          </Link>
        </li>

        <li className="nav-item nav-link">
          <Link className="nav-link" to="/ProductList">
            <span style={{color: "#9bcf29"}}>Listado de Productos</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>

      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/GenresInDb">
          <GenresInDb />
        </Route>
        <Route path="/LastMovieInDb">
          <LastMovieInDb />
        </Route>
        <Route path="/ContentRowMovies">
          <ContentRowMovies />
        </Route>
        <Route path="/TotalCategory">
          <TotalCategory />
        </Route>
        <Route path="/ProductList">
          <ProductsList />
        </Route>
        <Route component={NotFound} />
      </Switch>
      {/*<!-- End Microdesafio 2 -->*/}
    </React.Fragment>
  );
}
export default SideBar;
