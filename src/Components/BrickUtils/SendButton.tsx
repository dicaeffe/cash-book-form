import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import MyPreConfig from './MyPreConfig';

function SendButton(props: Send) {

    const onClick = () => {
        alert('clicked');
        props.body.map(element => {
            fetch('https://s4bmock.free.beeceptor.com/cash-book-form/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(element)
            })
            fetch(/*'https://lab.dicaeffe.mooo.com/cash-book/1.0.0/cashbook/transaction'*/
                    'http://s4bmock.free.beeceptor.com/cash-book/1.0.0/cashbook/transaction', {
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