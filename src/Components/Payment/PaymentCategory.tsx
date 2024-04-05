import MyProps from '../BrickUtils/MyProps';
import MyElement from '../BrickUtils/MyElement';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import MuseumIcon from '@mui/icons-material/Museum';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MyStackButtons from '../BrickUtils/MyStackButtons';

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
    )
  ]

  return (
    <div>
      <MyStackButtons parentProps = {props} label={label.concat(":")} values={values} />
    </div>
  )
}

export default PaymentCategory