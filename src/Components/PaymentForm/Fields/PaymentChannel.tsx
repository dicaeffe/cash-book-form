import CreditCardIcon from "@mui/icons-material/CreditCard";
import MoneyIcon from "@mui/icons-material/Money";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AllOutIcon from "@mui/icons-material/AllOut";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import OutputIcon from "@mui/icons-material/Output";
import InputIcon from "@mui/icons-material/Output";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import PaymentData from "../Model/PaymentData";
import MyElement from "../Model/MyElement";

function PaymentChannel(props: {
  paymentData: PaymentData;
  onChange: (d: PaymentData) => void;
  index: number;
  field: string;
}) {
  const label =
    "Canale transazione " + props.field + " per indxe=" + props.index;

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

  const onTransactionChange = (newValue: string) => {
    let data: PaymentData = props.paymentData.clone();
    data.setFieldValue(props.field, props.index, newValue);
    props.onChange(data);
  };

  return (
    <div>
      <Select
        labelId={"select-" + props.field + "-transaction-" + props.index}
        id={"select-" + props.field + "-transaction-" + props.index}
        value={"" + props.paymentData.getFieldValue(props.field, props.index)}
        onChange={(event: SelectChangeEvent) => {
          onTransactionChange(event.target.value);
        }}
        autoWidth
        label={label}
      >
        {values.map((v) => {
          return (
            <MenuItem key={v.key} value={v.value}>
              {v.icon}
              {" " + v.value}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}

export default PaymentChannel;
