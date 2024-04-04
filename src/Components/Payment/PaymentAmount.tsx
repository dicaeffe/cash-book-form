import { InputAdornment } from '@mui/material'
import Text from '../Text';
import MyProps from '../BrickUtils/MyProps';

function PaymentAmount(props: MyProps<string>) {
    let isError = false;
    let errorHelper = "Il valore dev'essere numerico";

    const handleChoice = (event:any) => {
        props.onChange(event);
        if (isNaN(+event)){
            isError = true
        }
    }

    return (
        <div>
            <Text
                label="Importo"
                id="importo-number"
                type="number"
                defaultValue = {props.defaultValue}
                isError = {isError}
                InputProps={{
                    endAdornment: <InputAdornment position="start">€</InputAdornment>,
                }}
                onChange={handleChoice}
                helperText={isError ? errorHelper : props.helperText}
            />
        </div>
    )
}

export default PaymentAmount