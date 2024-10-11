import { TextField } from '@mui/material';
import PaymentData from '../Model/PaymentData';

function PaymentDescription(props:{paymentData:PaymentData, onChange:(d: PaymentData) => void}) {
    const label="Descrizione"
    const id="descrizione-text"
    const helper="helper da valorizzare"
    
    const handleFormChange = (e: { target: { value: any; }; }) => {
        let newData:PaymentData = props.paymentData.clone();
        newData.description = e.target.value;
        console.info(newData);
        props.onChange(newData);
    }

    return (
        <div>
            <TextField
                label={label}
                required
                id={id}
                helperText={helper}
                defaultValue={props.paymentData.description}
                onChange={event => handleFormChange(event)}
                type="text"
                margin="normal"
                fullWidth 
            />
        </div>
    )
}

export default PaymentDescription