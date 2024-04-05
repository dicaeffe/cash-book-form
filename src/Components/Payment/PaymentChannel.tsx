import CreditCardIcon from '@mui/icons-material/CreditCard';
import MoneyIcon from '@mui/icons-material/Money';
import MyProps from '../BrickUtils/MyProps';
import MyElement from '../BrickUtils/MyElement';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { IconButton, Button, Stack } from '@mui/material';
import AllOutIcon from '@mui/icons-material/AllOut';

function PaymentChannel(props:MyProps<string>) {

  const values = [
    new MyElement(
      1,
      "contanti", "contanti",
      <MoneyIcon />
    ), new MyElement(
      2,
      "ccWebank", "ccWB",
      <AccountBalanceIcon />
    ), new MyElement(
      3,
      "ccIllimity", "ccILL",
      <AccountBalanceIcon />
    ), new MyElement(
      4,
      "crPostePay", "crPP",
      <CreditCardIcon />
    ), new MyElement(
      5,
      "buoniPasto", "bp",
      <FoodBankIcon />
    ), new MyElement(
      6,
      "cdRendimax", "cdRNMX",
      <SavingsIcon />
    ), new MyElement(
      7,
      "cdProgetto", "cdPRO",
      <SavingsIcon />
    ), new MyElement(
      8,
      "payPal", "wPP",
      <AccountBalanceWalletIcon />
    ), new MyElement(
      9,
      "crHype", "crHY",
      <CreditCardIcon />
    ), new MyElement(
      10,
      "satispay", "wSP",
      <AccountBalanceWalletIcon />
    ), new MyElement(
      11,
      "out", "out",
      <AllOutIcon />
    )
  ]

  return (
    <div>
      <p>Canale transazione: {props.defaultValue}</p>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        {values.map(v =>
          <IconButton aria-label={v.label} onClick={() => {props.onChange(v.value)}} color={v.value == props.defaultValue ? "primary" : "secondary"} >
            {v.icon}<div><small>{v.label}</small></div>
          </IconButton>
        )}
      </Stack>
      <br/>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        {values.map(v =>
          <IconButton aria-label={v.label} onClick={() => {props.onChange(v.value)}} color={v.value == props.defaultValue ? "primary" : "secondary"} >
            {v.icon}<small>{v.label}</small>
          </IconButton>
        )}
      </Stack>
      <br/>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        {values.map(v =>
          <Button startIcon={v.icon} onClick={() => {props.onChange(v.value)}} color={v.value == props.defaultValue ? "primary" : "secondary" } >
            <div><small>{v.label}</small></div>
          </Button>
        )}
      </Stack>
    </div>
  )
}

export default PaymentChannel