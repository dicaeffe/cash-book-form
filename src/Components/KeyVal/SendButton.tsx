import { Button, IconButton, Snackbar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import KeyVal from "./Model/KeyVal";

function SendButton(props: { data: KeyVal }) {
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
  const [openSnackbarFailure, setOpenSnackbarFailure] = useState(false);

  const onClick = () => {
    const body = props.data;
    /*const requests: BERequests = new BERequests(props.data);
      requests.bodies.map(body => {*/
    //alert(body.toString());
    fetch("https://lab.dicaeffe.mooo.com/cash-book/1.0.0/keyval", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          setOpenSnackbarSuccess(true);
        } else {
          setOpenSnackbarFailure(true);
          throw new Error(response.statusText);
        }
      })
      .catch(() => {
        setOpenSnackbarFailure(true);
      });
    /*})*/
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbarSuccess(false);
    setOpenSnackbarFailure(false);
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
      <Button variant="contained" endIcon={<SendIcon />} onClick={onClick}>
        Invia
      </Button>

      <Snackbar
        open={openSnackbarSuccess}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Inviato"
        action={action}
      />
      <Snackbar
        open={openSnackbarFailure}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Errore"
        action={action}
      />
    </div>
  );
}

export default SendButton;
