import { Container, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from 'react-bootstrap/Navbar';

function ProviderForm() {
    //Age, Gender, ScheudleDay-Time, AppointmentDay, Diabetes, Hypertesion, Welfare

    const onFormSubmit = (e) => {
        e.preventDefault();
        let age = Math.min(e.target[0].value/100.00, 1);
        let gender = parseInt(e.target[1].value);
        let alcholic = parseInt(e.target[2].value);
        let diabetes = parseInt(e.target[3].value);
        let hypertension = parseInt(e.target[4].value);
        let welfare = parseInt(e.target[5].value);
        let handicap = parseInt(e.target[6].value);
        let sms = parseInt(e.target[7].value);
        console.log(gender, age, welfare, hypertension, diabetes, alcholic, handicap, sms)
    }
    return (
        <Container>
            <Header >Patient Form</Header>
            <Form onSubmit={onFormSubmit}>
                <FormGroup className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter Age" defaultValue={50} />
                </FormGroup>
                <FormGroup className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select>
                        <option value="0">Choose not to identify</option>
                        <option value="1">Male</option>
                        <option value="0">Female</option>
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
                <FormGroup className="mb-3">
                    <Form.Label>Handicap</Form.Label>
                    <Form.Select>
                        <option value="1">Choose not to answer</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </Form.Select>
                </FormGroup>
                <FormGroup className="mb-3">
                    <Form.Label>SMS Sent</Form.Label>
                    <Form.Select>
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