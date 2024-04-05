import MyProps from '../BrickUtils/MyProps';
import MyDatePicker from '../BrickUtils/MyDatePicker';

function PaymentDate(props: MyProps<Date>) {
    const label = "Data di esecuzione"

    return (
        <div>
            <p>{label}{": "} {props.defaultValue.toISOString()}</p>
            <MyDatePicker defaultValue={props.defaultValue} onChange={props.onChange} label={label} />
        </div>
    )
}

export default PaymentDate