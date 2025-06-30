import CreditCardIcon from "@mui/icons-material/CreditCard";
import MoneyIcon from "@mui/icons-material/Money";
import MyProps from "../BrickUtils/MyProps";
import MyElement from "../BrickUtils/MyElement";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AllOutIcon from "@mui/icons-material/AllOut";
import MyStackButtons from "../BrickUtils/MyStackButtons";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import OutputIcon from "@mui/icons-material/Output";
import InputIcon from "@mui/icons-material/Output";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

function PaymentChannel(props: MyProps<string>) {
  const label = "Canale transazione";

  const values = [
    new MyElement(1, "contanti", "contanti", <MoneyIcon />),
    new MyElement(2, "buoniPasto", "bp", <FoodBankIcon />),
    new MyElement(3, "crPostePay", "crPP", <CreditCardIcon />),
    new MyElement(4, "crHype", "crHY", <CreditCardIcon />),
    new MyElement(5, "ccWebank", "ccWB", <AccountBalanceIcon />),
    new MyElement(6, "ccIllimity", "ccILL", <AccountBalanceIcon />),
    new MyElement(7, "cdRendimax", "cdRNMX", <SavingsIcon />),
    new MyElement(8, "cdProgetto", "cdPRO", <SavingsIcon />),
    new MyElement(9, "investimentiBuoni", "INV", <CurrencyExchangeIcon />),
    new MyElement(10, "altro", "ALTRO", <HelpCenterIcon />),
    new MyElement(11, "payPal", "wPP", <AccountBalanceWalletIcon />),
    new MyElement(12, "satispay", "wSP", <AccountBalanceWalletIcon />),
    new MyElement(13, "out", "out", <AllOutIcon />),
    new MyElement(14, "crediti", "cred", <InputIcon />),
    new MyElement(15, "debiti", "deb", <OutputIcon />),
    new MyElement(16, "welfare", "wlf", <CreditCardIcon />),
  ];

  return (
    <div>
      <MyStackButtons
        parentProps={props}
        label={label.concat(":")}
        values={values}
      />
    </div>
  );
}

export default PaymentChannel;
