import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Picking Your Appointment!!</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home Page</Nav.Link>
                <Nav.Link href="info">About Our Software</Nav.Link>
                <Nav.Link href="provider">Patien Cancellation Risk</Nav.Link>
                <Nav.Link href="schedule">Schedule Analyzer</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default Header;