import { Container, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Header from 'react-bootstrap/Navbar';

function PatientForm() {
    //Age, Gender, ScheudleDay-Time, AppointmentDay, Diabetes, Hypertesion, Welfare

    return (
        <Container>
            <Header>Patient Form</Header>
            <Form>
                <FormGroup>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter Age" />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select>
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                        <option value="1">Choose Not To Identify</option>
                    </Form.Select>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Alcholic</Form.Label>
                    <Form.Select>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </Form.Select>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Diabetes</Form.Label>
                    <Form.Select>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </Form.Select> 
                </FormGroup>
                <FormGroup>
                    <Form.Label>Hypertension</Form.Label>
                    <Form.Select>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </Form.Select>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Welfare</Form.Label>
                    <Form.Select>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </Form.Select>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Schedule Date - Begin</Form.Label>
                    <Form.Control type="date" placeholder="Enter Schedule Date - Begin" />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Schedule Date - End</Form.Label>
                    <Form.Control type="date" placeholder="Enter Schedule Date - End" />
                </FormGroup>
            </Form>
        </Container>
        
    )
}

export default PatientForm;