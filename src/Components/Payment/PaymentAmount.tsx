import { InputAdornment } from '@mui/material'
import Text from '../BrickUtils/Text';
import MyProps from '../BrickUtils/MyProps';
import { NumberFormatValues, NumericFormat } from 'react-number-format';
import { TextField } from '@mui/material';

function PaymentAmount(props: MyProps<number>) {
    const label = "Importo"
    const helperText = "Inserisci l'importo totale";
    const errorHelper = "Il valore dev'essere numerico";
    let isError = false;

    const handleChoice = (values:NumberFormatValues) => {
        props.onChange(values.floatValue ? values.floatValue : 0.00);
    }

    return (
        <div>
            <NumericFormat
                label={label}
                id="importo-number"
                helperText={isError ? errorHelper : helperText}
                /* Numeric configuration */
                value={props.defaultValue}
                defaultValue={props.defaultValue}
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