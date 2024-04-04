import CreditCardIcon from '@mui/icons-material/CreditCard';
import MoneyIcon from '@mui/icons-material/Money';
import MyProps from '../BrickUtils/MyProps';
import MyElement from '../BrickUtils/MyElement';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { ButtonGroup, IconButton, Button } from '@mui/material';
import AllOutIcon from '@mui/icons-material/AllOut';

function PaymentChannel(props:MyProps<string>) {

  const values = [
    new MyElement(
      1,
      "contanti", "contanti",
      <MoneyIcon />
    ), new MyElement(
      2,
      "ccWebank", "cc webank",
      <AccountBalanceIcon />
    ), new MyElement(
      3,
      "ccIllimity", "cc illimity",
      <AccountBalanceIcon />
    ), new MyElement(
      4,
      "crPostePay", "cr postepay",
      <CreditCardIcon />
    ), new MyElement(
      5,
      "buoniPasto", "buoni pasto aziendali",
      <FoodBankIcon />
    ), new MyElement(
      6,
      "cdRendimax", "cd rendimax",
      <SavingsIcon />
    ), new MyElement(
      7,
      "cdProgetto", "cd progetto",
      <SavingsIcon />
    ), new MyElement(
      8,
      "payPal", "wallet paypal",
      <AccountBalanceWalletIcon />
    ), new MyElement(
      9,
      "crHype", "cr hype",
      <CreditCardIcon />
    ), new MyElement(
      10,
      "satispay", "wallet satispay",
      <AccountBalanceWalletIcon />
    ), new MyElement(
      11,
      "out", "fuori",
      <AllOutIcon />
    )
  ]

  return (
    <div>
      <p>Canale transazione: {props.defaultValue}</p>
      <ButtonGroup variant="text" aria-label="select the payment channel">
        {values.map(v =>
          <IconButton aria-label={v.label} onClick={() => {props.onChange(v.value)}} color={v.value == props.defaultValue ? "primary" : "secondary"} >
            {v.icon}
          </IconButton>
        )}
      </ButtonGroup>
      <br/>
      <ButtonGroup variant="text" aria-label="select the payment channel">
        {values.map(v =>
          <Button startIcon={v.icon} onClick={() => {props.onChange(v.value)}} color={v.value == props.defaultValue ? "primary" : "secondary" } >
            <p><small>{v.label}</small></p>
          </Button>
        )}
      </ButtonGroup>
    </div>
  )
}

export default PaymentChannel