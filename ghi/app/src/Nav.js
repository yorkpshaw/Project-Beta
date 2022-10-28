import { NavLink } from "react-router-dom";


function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/autos" id="navbarDropdown" role="button" aria-labelledby="navbarDropdownMenuLink" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Vehicles</NavLink>
              <ul className="dropdown-menu" aria-labelledby='navbarDropdown' data-bs-auto-close="true">
                <li><NavLink className="dropdown-item" to="/autos">View vehicles</NavLink></li>
                <li><NavLink className="dropdown-item" to="/autos/list/models">View models</NavLink></li>
                <li><NavLink className="dropdown-item" to="/autos/list/manufacturers">View manufacturers</NavLink></li>
                <div className="dropdown-divider"></div>
                <li><NavLink className="dropdown-item" to="/autos/add">Add new vehicle</NavLink></li>
                <li><NavLink className="dropdown-item" to="/autos/add/model">Add new model</NavLink> </li>
                <li><NavLink className="dropdown-item" to="/autos/add/manufacturer">Add new manufacturer</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/service" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Service</NavLink>
              <ul className="dropdown-menu" aria-labelledby='navbarDropdown' data-bs-auto-close="true">
                <li><NavLink className="dropdown-item" to="/service">Schedule a service appointment</NavLink></li>
                <li><NavLink className="dropdown-item" to="/service/list">View pending appointments</NavLink></li>
                <li><NavLink className="dropdown-item" to="/service/history">View service history</NavLink> </li>
              </ul>
            </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="/technician" id="navbarSecondDrop" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Technician</NavLink>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown" data-bs-auto-close="true">
                    <li><NavLink className="dropdown-item" to="/technician">Enter new technician</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/sales" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Sales</NavLink>
              <ul className="dropdown-menu" aria-labelledby='navbarDropdown' data-bs-auto-close="true">
              <li><NavLink className="dropdown-item" to="/sales">View sales list</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sales/add">Add salesrecord</NavLink></li>
                <div className="dropdown-divider"></div>
                <li><NavLink className="dropdown-item" to="/sales/salesperson">View sales by salesperson</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sales/salesperson/new">Enter new salesperson</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sales/customer">Enter new customer</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )

}

export default Nav;
