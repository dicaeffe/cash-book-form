import CreditCardIcon from '@mui/icons-material/CreditCard';
import MoneyIcon from '@mui/icons-material/Money';
import MyProps from '../BrickUtils/MyProps';
import MyElement from '../BrickUtils/MyElement';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AllOutIcon from '@mui/icons-material/AllOut';
import MyStackButtons from '../BrickUtils/MyStackButtons';

function PaymentChannel(props:MyProps<string>) {
  const label = "Canale transazione"

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
      <MyStackButtons parentProps = {props} label={label.concat(":")} values={values} />
    </div>
  )
}

export default PaymentChannel