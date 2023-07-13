import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getForget } from '../../service/forget.service';
import { useNavigate } from "react-router";
import './Navbar.css'

function NavBar() {
  const navigate=useNavigate();
  function logout (){
    localStorage.clear();
    navigate("/Login")


  }
  function dashboard(){
    navigate("/Dashboard")
  }
  function profile(){
    navigate("/Profile")
  }
  function changePassword(){
    navigate("/updatePassword")
  }
  function home(){
    navigate("/Dashboard")
  }



  return (
    
    <div className='Navbar'>
      
    <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand onClick={home}>Msite</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={dashboard}><i class="fas fa-home"></i> Home</Nav.Link>  
            
          </Nav>
          <Nav>
          
            <NavDropdown title="Profile Settings" id="collasible-nav-dropdown" >
              <NavDropdown.Item onClick={profile}> <i class="far fa-user"></i> Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={changePassword}> <i class="fas fa-unlock"></i> Update password</NavDropdown.Item>
              <NavDropdown.Item  onClick={logout}> <i class="fas fa-sign-out-alt"></i> Logout</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  
  );
}

export default NavBar;