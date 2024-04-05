import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import MyPreConfig from './MyPreConfig';

function SendButton(props: Send) {

    const onClick = () => {
        alert('clicked');
        fetch('https://s4bmock.free.beeceptor.com/cash-book-form/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        })
        props.body.map(element => {
            fetch('https://s4bmock.free.beeceptor.com/cash-book-form/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(element)
            })
        })
    };

    return (
        <div>
            <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={onClick}
                >
                Send
            </Button>
        </div>
    )
}

export default SendButton

class Send {
	body: MyPreConfig[];

	constructor(body: MyPreConfig[]) {
		this.body = body;
	}
}