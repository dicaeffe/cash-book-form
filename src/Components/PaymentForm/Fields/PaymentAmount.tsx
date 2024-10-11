import { NumberFormatValues, NumericFormat } from 'react-number-format';
import { TextField } from '@mui/material';
import PaymentData from '../Model/PaymentData';

function PaymentAmount(props:{paymentData:PaymentData, onChange:(d: PaymentData) => void, index:number}) {
    const label = "Importo"
    const helperText = "Inserisci l'importo totale";
    const errorHelper = "Il valore dev'essere numerico";
    let isError = false;
    const field = "amount";

    var defaultValue = props.paymentData.getFieldValue(field, props.index);

    const handleChoice = (values:NumberFormatValues) => {
        
        let data:PaymentData = props.paymentData.clone();
        if(!data.transactions){
        data.transactions = [];
        }
        data.setNumValue(field, props.index, values.floatValue ? values.floatValue : 0.00);
        props.onChange(data);
    }

    return (
        <div>
            <NumericFormat
                label={label}
                id="importo-number"
                helperText={isError ? errorHelper : helperText}
                /* Numeric configuration */
                value={defaultValue}
                defaultValue={defaultValue}
                customInput={TextField}
                suffix='€'
                thousandSeparator=" "
                allowNegative={false}
                allowedDecimalSeparators={[',','.']}
                decimalSeparator=","
                decimalScale={2}
                fixedDecimalScale
                onValueChange={handleChoice}
            />
        </div>
    )
}

export default PaymentAmount