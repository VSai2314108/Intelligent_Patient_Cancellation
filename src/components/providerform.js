import { Container, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Header from 'react-bootstrap/Navbar';

function ProviderForm() {
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
                        <option value="1">Choose not to identify</option>
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
            </Form>
        </Container>
    )
}

export default ProviderForm;