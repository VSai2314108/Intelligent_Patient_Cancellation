import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar>
                <Nav.Link href="/">Home Page</Nav.Link>
                <Nav.Link href="patient">Patient Appointment Scheduler</Nav.Link>
                <Nav.Link href="provider">Provider Cancellation Identifier</Nav.Link>
        </Navbar>
    )
}
export default Header;