import MyProps from '../BrickUtils/MyProps';
import Choose from '../BrickUtils/Choose';
import MyElement from '../BrickUtils/MyElement';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ButtonGroup, IconButton } from '@mui/material';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import MuseumIcon from '@mui/icons-material/Museum';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';

function PaymentCategory(props:MyProps<string>) {

  const values = [
    new MyElement(
      1,
      "ciboUfficio",
      "cibo ufficio 1",
      <TakeoutDiningIcon />
    ), new MyElement(
      2,
      "spesaCasa",
      "Spesa cibo, saponi, etc",
      <ShoppingCartIcon />
    ), new MyElement(
      3,
      "ciboFuori",
      "Ristoranti, etc",
      <RestaurantIcon />
    ), new MyElement(
      4,
      "trasporti",
      "TPL: biglietti, abbonamenti, etc",
      <DirectionsRailwayIcon />
    ), new MyElement(
      5,
      "cultura",
      "Cultura: cinema, musei, etc",
      <MuseumIcon />
    )
  ]

  return (
    <div>
      <p>Voce di spesa: {props.defaultValue}</p>
      <ButtonGroup variant="text" aria-label="select the payment category">
        {values.map(v =>
          <IconButton aria-label={v.label} onClick={() => {props.onChange(v.value)}} color={v.value == props.defaultValue ? "primary" : "secondary"} >
            {v.icon}
          </IconButton>
        )}
      </ButtonGroup>
      <Choose
        defaultValue={props.defaultValue}
        label="select the payment category"
        values={values}
        onChange={props.onChange} />
    </div>
  )
}

export default PaymentCategory