import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./css/header.css"

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Samaya </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link class = "nav-links" href="info">About Our Software</Nav.Link>
                <Nav.Link class = "nav-links" href="provider">Patient Cancellation Risk</Nav.Link>
                <Nav.Link class = "nav-links" href="schedule">Schedule Analyzer</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default Header;