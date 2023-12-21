import Form from 'react-bootstrap/Form';
import './inpute.scss';

interface InputProps {
    label: string, 
    value: string | number, 
    updateValue(value:any): void 
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <Form.Group className="mb-3" controlId="formBasicNome">
                <Form.Label>{label}</Form.Label>
                <input value={value} onChange={event => updateValue(event.target.value)}></input>
            </Form.Group>
        </>
    );
};

export default Input;