import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import MyProps from './BrickUtils/MyProps';
import { TextField } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

function MyDatePicker(props:MyProps<Date>) {
    const [myDate, setMyDate] = useState(props.defaultValue);

    const onPick = (date:Dayjs|null) => {
        const realDate = date ? date.toDate() : props.defaultValue
        setMyDate(realDate);
        props.onChange(realDate);
    };

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <MobileDatePicker
                    defaultValue={dayjs(myDate)}
                    label={props.label}
                    format="DD/MM/YYYY"
                    onChange={onPick}
                />
            </LocalizationProvider>
        </div>
    )
}

export default MyDatePicker