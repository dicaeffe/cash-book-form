import { InputAdornment } from '@mui/material'
import Text from '../BrickUtils/Text';
import MyProps from '../BrickUtils/MyProps';

function PaymentAmount(props: MyProps<string>) {
    const label = "Importo"
    const helperText = "Inserisci l'importo totale";
    const errorHelper = "Il valore dev'essere numerico";
    let isError = false;

    const handleChoice = (event:any) => {
        props.onChange(event);
        if (isNaN(+event)){
            isError = true
        }
    }

    return (
        <div>
            <Text
                label={label}
                id="importo-number"
                type="number"
                defaultValue = {props.defaultValue}
                isError = {isError}
                InputProps={{
                    endAdornment: <InputAdornment position="start">€</InputAdornment>,
                }}
                onChange={handleChoice}
                helperText={isError ? errorHelper : helperText}
            />
        </div>
    )
}

export default PaymentAmount