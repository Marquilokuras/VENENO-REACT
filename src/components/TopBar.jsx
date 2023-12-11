import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";

function TopBar() {
  const [lastUser, setLastUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4200/api/users/list")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
    <React.Fragment>
      <nav
        className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow"
        style={{ background: "#202020" }}
      >
        {/*<!-- Sidebar Toggle (Topbar) -->*/}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        {/*<!-- Topbar Navbar -->*/}
        <ul className="navbar-nav ml-auto">
          {/* <li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i className="fas fa-bell fa-fw"></i>
								
								<span className="badge badge-danger badge-counter">3+</span>
							</a>
						</li>
						
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i className="fas fa-envelope fa-fw"></i>
								
								<span className="badge badge-danger badge-counter">7</span>
							</a>
						</li>  */}

          <div className="topbar-divider d-none d-sm-block"></div>

          {/*<!-- Nav Item - User Information -->*/}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
              <span
                className="mr-2 d-none d-lg-inline  small"
                style={{ color: "#9bcf29" }}
              >
                {capitalizeFirstLetter(lastUser.name + " " + lastUser.lastname)}
              </span>
              <img
                className="img-profile rounded-circle"
                src={"http://localhost:4200/img/users/" + lastUser.image}
                alt={capitalizeFirstLetter(
                  lastUser.name + " " + lastUser.lastname
                )}
                width="60"
              />
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
export default TopBar;
