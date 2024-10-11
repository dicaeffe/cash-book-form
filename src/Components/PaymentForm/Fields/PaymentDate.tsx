import PaymentData from '../Model/PaymentData';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

function PaymentDate(props:{paymentData:PaymentData, onChange:(d: PaymentData) => void}) {
    const label = "Data di esecuzione"

    const [myDate, setMyDate] = useState(props.paymentData.transactionDate);

    const onPick = (date:Dayjs|null) => {
        const realDate = (date) ? date.toDate() : props.paymentData.transactionDate
        setMyDate(realDate);

        var data:PaymentData = props.paymentData.clone();
        data.transactionDate = realDate;
        console.info(date)
        props.onChange(data);
    };

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <MobileDatePicker
                    defaultValue={dayjs(myDate)}
                    label={label}
                    format="DD/MM/YYYY"
                    onChange={onPick}
                />
            </LocalizationProvider>
        </div>
    )
}

export default PaymentDate