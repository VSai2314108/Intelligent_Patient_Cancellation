import { Container, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from 'react-bootstrap/Navbar';

function ProviderForm() {
    //Age, Gender, ScheudleDay-Time, AppointmentDay, Diabetes, Hypertesion, Welfare

    const onFormSubmit = (e) => {
        e.preventDefault();
        let age = e.target[0].value;
        let gender = e.target[1].value;
        let alcholic = e.target[2].value;
        let diabetes = e.target[3].value;
        let hypertension = e.target[4].value;
        let welfare = e.target[5].value;
        console.log(age,gender,alcholic,diabetes,hypertension,welfare)
    }
    return (
        <Container>
            <Header >Patient Form</Header>
            <Form onSubmit={onFormSubmit}>
                <FormGroup className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter Age" />
                </FormGroup>
                <FormGroup className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select>
                        <option value="1">Choose not to identify</option>
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                    </Form.Select>
                </FormGroup >
                <FormGroup className="mb-3">
                    <Form.Label>Alcholic</Form.Label>
                    <Form.Select>
                        <option value="1">Choose not to answer</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </Form.Select>
                </FormGroup>
                <FormGroup className="mb-3">
                    <Form.Label>Diabetes</Form.Label>
                    <Form.Select>
                        <option value="1">Choose not to answer</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </Form.Select> 
                </FormGroup >
                <FormGroup className="mb-3">
                    <Form.Label>Hypertension</Form.Label>
                    <Form.Select>
                        <option value="1">Choose not to answer</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </Form.Select>
                </FormGroup>
                <FormGroup className="mb-3">
                    <Form.Label>Welfare</Form.Label>
                    <Form.Select>
                        <option value="1">Choose not to answer</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </Form.Select>
                </FormGroup>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default ProviderForm;