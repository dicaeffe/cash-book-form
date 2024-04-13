import { Button, IconButton, Snackbar } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import MyPreConfig from '../BrickUtils/MyPreConfig';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

function SendButton(props: Send) {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [messageSnackbar, setMessageSnackbar] = useState(false);
    
    const onClick = () => {
        props.body.map(element => {
            alert(element.toString());
            fetch('https://lab.dicaeffe.mooo.com/cash-book/1.0.0/cashbook/transaction', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(element)
            })
            .then(response => {
              if (response.ok) {
                setMessageSnackbar(true);
                setOpenSnackbar(true);
                throw new Error(response.statusText)
              } else {
                setMessageSnackbar(false);
                setOpenSnackbar(true);
              }
            })
            .catch(() => {
                setMessageSnackbar(false);
                setOpenSnackbar(true);
            })
        })
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      console.log("Closing snackbar notification due to: " + event ? event.type : "expiration");
      
      setOpenSnackbar(false);
    };
    
    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          vabbé
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );

    return (
        <div>
            <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={onClick}
                >
                Invia
            </Button>
            
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleClose}
                message={messageSnackbar ? "Inviato" : "Errore"}
                action={action}
            />
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