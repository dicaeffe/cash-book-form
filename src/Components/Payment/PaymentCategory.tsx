import MyProps from '../BrickUtils/MyProps';
import MyElement from '../BrickUtils/MyElement';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import MuseumIcon from '@mui/icons-material/Museum';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MyStackButtons from '../BrickUtils/MyStackButtons';
import PhoneIcon from '@mui/icons-material/Phone';
import MoneyIcon from '@mui/icons-material/Money';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import HomeIcon from '@mui/icons-material/Home';
import AddHomeIcon from '@mui/icons-material/AddHome';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RedeemIcon from '@mui/icons-material/Redeem';
import BuildIcon from '@mui/icons-material/Build';
import LuggageIcon from '@mui/icons-material/Luggage';
import SchoolIcon from '@mui/icons-material/School';
import AccessibleIcon from '@mui/icons-material/Accessible';
import HikingIcon from '@mui/icons-material/Hiking';

function PaymentCategory(props:MyProps<string>) {
  const label = "Voce di spesa"

  const values = [
    new MyElement(
      1,
      "ciboUfficio",
      "uff",
      <TakeoutDiningIcon />
    ), new MyElement(
      2,
      "spesaCasa",
      "Spesa",
      <ShoppingCartIcon />
    ), new MyElement(
      3,
      "ciboFuori",
      "ristor.",
      <RestaurantIcon />
    ), new MyElement(
      4,
      "trasporti",
      "TPL",
      <DirectionsRailwayIcon />
    ), new MyElement(
      5,
      "cultura",
      "Cultura",
      <MuseumIcon />
    ), new MyElement(
      6,
      "telefonia",
      "Phone",
      <PhoneIcon />
    ), new MyElement(
      7,
      "bancaria",
      "Bnk",
      <AccountBalanceIcon />
    ), new MyElement(
      8,
      "payroll",
      "payroll",
      <MoneyIcon />
    ), new MyElement(
      9,
      "tasse",
      "Tax",
      <AccountBalanceIcon />
    ), new MyElement(
      10,
      "condominio",
      "Cond",
      <ApartmentIcon />
    ), new MyElement(
      11,
      "utenze",
      "Utz",
      <ElectricBoltIcon />
    ), new MyElement(
      12,
      "casa",
      "Casa",
      <HomeIcon />
    ), new MyElement(
      13,
      "altroCasa",
      "Altro",
      <AddHomeIcon />
    ), new MyElement(
      14,
      "sanitaria",
      "Sanit",
      <LocalHospitalIcon />
    ), new MyElement(
      15,
      "regali",
      "regali",
      <RedeemIcon />
    ), new MyElement(
      16,
      "manutenzione",
      "manutenzione",
      <BuildIcon />
    ), new MyElement(
      17,
      "Vacanze",
      "Vacanze",
      <LuggageIcon />
    ), new MyElement(
      18,
      "Formazione",
      "Form",
      <SchoolIcon />
    ), new MyElement(
      19,
      "Scout",
      "Scout",
      <HikingIcon />
    ), new MyElement(
      20,
      "Beneficienza",
      "Benef",
      <AccessibleIcon />
    )
  ]

  return (
    <div>
      <MyStackButtons parentProps = {props} label={label.concat(":")} values={values} />
    </div>
  )
}

export default PaymentCategory