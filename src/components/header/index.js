import { NavLink          } from 'react-router-dom';
import { Nav, Navbar      } from 'react-bootstrap';

export default function Header() {
   return (
      <div className="dashboard">
       <Navbar bg="light" variant="light" expand="lg">
           <Navbar.Brand href={process.env.PUBLIC_URL + '/'} >Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <NavLink
                  className="inactive"
                  activeClassName="active-b"
                  replace
                  exact
                  to="/memoria">
                      MEMORIA 
              </NavLink>
              <NavLink
                  className="inactive"
                  activeClassName="active-b"
                  replace
                  exact
                  to="/cpu">
                     CPU 
              </NavLink>
	   {/*
              <NavLink
                  className="inactive"
                  activeClassName="active-b"
                  replace
                  exact
                  to="/procesos">
                     PROCESOS 
              </NavLink>
	   */}
              <NavLink
                  className="inactive"
                  activeClassName="active-b"
                  replace
                  exact
                  to="/disco">
                     DISCO
              </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      );
}
