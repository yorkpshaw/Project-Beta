import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navs() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Automobiles" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/automobiles">See inventory</NavDropdown.Item>
              <NavDropdown.Item href="/automobiles/add">Add new automobile</NavDropdown.Item>
              <NavDropdown.Item href="/automobiles/add/model">Add new model</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto">
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/service">Schedule appointment</NavDropdown.Item>
              <NavDropdown.Item href="/automobiles/add">Add new automobile</NavDropdown.Item>
              <NavDropdown.Item href="/automobiles/add/model">Add new model</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;


// function Nav() {

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">CarCar</NavLink>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item dropdown">
//               <NavLink className="nav-link dropdown-toggle" to="/automobiles" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Vehicles</NavLink>
//               <ul className="dropdown-menu" aria-labelledby='navbarDropdown' data-bs-auto-close="true">
//                 <li><NavLink className="dropdown-item" to="/automobiles">View vehicles</NavLink></li>
//                 <li><NavLink className="dropdown-item" to="/automobiles/add">Add a new vehicle</NavLink></li>
//                 <li><NavLink className="dropdown-item" to="/automobiles/add/model">Add a new model</NavLink> </li>
//               </ul>
//             </li>
//             <li className="nav-item dropdown">
//               <NavLink className="nav-link dropdown-toggle" to="/service" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Service</NavLink>
//               <ul className="dropdown-menu" aria-labelledby='navbarDropdown' data-bs-auto-close="true">
//                 <li><NavLink className="dropdown-item" to="/service">Schedule a service appointment</NavLink></li>
//                 <li><NavLink className="dropdown-item" to="/service/list">View pending appointments</NavLink></li>
//                 <li><NavLink className="dropdown-item" to="/service/history">View service history</NavLink> </li>
//               </ul>
//             </li>
//                 <li className="nav-item dropdown">
//                   <NavLink className="nav-link dropdown-toggle" to="/technician" id="navbarSecondDrop" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Technician</NavLink>
//                   <ul className="dropdown-menu" aria-labelledby="navbarDropdown" data-bs-auto-close="true">
//                     <li><NavLink className="dropdown-item" to="/technician">Enter a new technician</NavLink></li>
//                   </ul>
//                 </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )

// }

// export default Nav;
