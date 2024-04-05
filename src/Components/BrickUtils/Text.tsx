import { TextField } from '@mui/material';
import MyProps from './MyProps';

function Text(props:MyProps<string>) {

    const handleInputChange = (e: { target: { value: any; }; }) => {
        props.onChange(e.target.value);
    }

    return (
        <div>
            <TextField
                label={props.label}
                required
                id={props.id}
                helperText={props.helperText}
                defaultValue={props.defaultValue}
                onChange={handleInputChange}
                InputProps={props.InputProps}
                type={props.type}
                margin="normal"
                fullWidth 
            />
        </div>
    )
}

export default Text