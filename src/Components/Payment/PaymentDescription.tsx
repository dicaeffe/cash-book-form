import MyProps from '../BrickUtils/MyProps';
import Text from '../BrickUtils/Text';

function PaymentDate(props: MyProps<string>) {
    const label = "Descrizione"
    const helperText = "Descrivi la movimentazione: a cosa è dovuta?";

    return (
        <div>
            <p>{label}{": "} {props.defaultValue}</p>
            <Text defaultValue={props.defaultValue} onChange={props.onChange} label={label} id="descrizione-text" helperText={helperText} />
        </div>
    )
}

export default PaymentDate