import { NavLink } from "react-router-dom";
import "./index.css"

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand col-md-4" to="/">Electricar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <li className="nav-logo">
        <a className="logo-link active" aria-current="page" href="/audi">
          <img className="logo" src="https://meccomindustrial.com/wp-content/uploads/2015/07/AudiLogo.png" />
        </a>
        <a className="logo-link active" aria-current="page" href="bmw">
          <img className="logo" src="https://cdn.iconscout.com/icon/free/png-256/bmw-1863540-1580030.png" />
        </a>
        <a className="logo-link active" aria-current="page" href="benz">
          <img className="logo" src="https://companiesmarketcap.com/img/company-logos/256/MBG.DE.png" />
        </a>
        </li>
          <ul className="navbar-nav ms-auto py-4 py-lg-0 col-md-4">
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="@" role="button" aria-expanded="true">Vehicles</a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby='navbarDropdown' data-bs-auto-close="true">
                <li><NavLink className="dropdown-item" to="/autos">View vehicles</NavLink></li>
                <li><NavLink className="dropdown-item" to="/autos/models">View models</NavLink></li>
                <li><NavLink className="dropdown-item" to="/autos/manufacturers">View manufacturers</NavLink></li>
                <div className="dropdown-divider"></div>
                <li><NavLink className="dropdown-item" to="/autos/add">Add new vehicle</NavLink></li>
                <li><NavLink className="dropdown-item" to="/autos/models/add">Add new model</NavLink> </li>
                <li><NavLink className="dropdown-item" to="/autos/manufacturers/add">Add new manufacturer</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="@" role="button" aria-expanded="false">Service</a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby='navbarDropdown' data-bs-auto-close="true">
                <li><NavLink className="dropdown-item" to="/service">Schedule a service appointment</NavLink></li>
                <li><NavLink className="dropdown-item" to="/service/list">View pending appointments</NavLink></li>
                <li><NavLink className="dropdown-item" to="/service/history">View service history</NavLink> </li>
              </ul>
            </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="@" role="button" aria-expanded="false">Technician</a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" data-bs-auto-close="true">
                    <li><NavLink className="dropdown-item" to="/technician">Enter new technician</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="@" role="button" aria-expanded="false">Sales</a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby='navbarDropdown' data-bs-auto-close="true">
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

//     <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
//     <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">CarCar</NavLink>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//             Menu
//             <i className="fas fa-bars ms-1"></i>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarResponsive">
//             <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
//                 <li className="nav-item"><NavLink className="nav-link" to="/autos">Vehicles</NavLink></li>
//                 <li className="nav-item"><NavLink className="nav-link" to="/service">Services</NavLink></li>
//             </ul>
//         </div>
//     </div>
// </nav>
