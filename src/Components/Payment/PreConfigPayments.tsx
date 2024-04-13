import MyPreConfig from '../BrickUtils/MyPreConfig';
import MyProps from '../BrickUtils/MyProps';
import { Chip, Avatar } from '@mui/material';
//import Conad from '/src/static/images/avatar/Conad.png';
//import Edenred from '/src/static/images/avatar/Edenred.png';
import Windtre from '/images/avatars/Windtre.svg';
import Edenred from '/images/avatars/Edenred.png';
import Conad from '/images/avatars/Conad.png';/*
import Edenred from '/public/assets/images/avatar/Edenred.png';
import Windtre from '/public/assets/images/avatar/Windtre.svg';*/

function PreConfigPayments(props:MyProps<MyPreConfig[]>) {
  const label = "PreConfig Payments"

  const values = [{
    key: 0,
    name: "Stipendio",
    avatar: "S",
    defaultValues: [
      new MyPreConfig(null, "payroll", "Spesa al Conad", "out", "ccWebank", "0,00")
    ]
  },{
    key: 1,
    name: "BP",
    avatar: Conad,
    defaultValues: [
      new MyPreConfig(null, "spesaCasa", "Spesa al Conad", "buoniPasto", "out", "16,00")
    ]
  },{
    key: 2,
    name: "CC",
    avatar: Conad,
    defaultValues: [
      new MyPreConfig(null, "spesaCasa", "Spesa al Conad", "ccWebank", "out", "0,00")
    ]
  },{
    key: 3,
    name: "Pranzo BP",
    avatar: Edenred,
    defaultValues: [
      new MyPreConfig(null, "ciboUfficio", "Pranzo da ", "buoniPasto", "out", "0,00")
    ]
  },{
    key: 4,
    name: "Pranzo CC",
    avatar: "P",
    defaultValues: [
      new MyPreConfig(null, "ciboUfficio", "Pranzo da ", "ccIllimity", "out", "0,00")
    ]
  },{
    key: 4,
    name: "Wind3",
    avatar: Windtre,
    defaultValues: [
      new MyPreConfig(null, "telefonia", "Abbonamento Windtre", "ccWebank", "out", "5,00")
    ]
  }
  ]

  return (
    <div>
      <p>{label}</p>
      {values.map(v =>
        <Chip
          avatar={<Avatar alt={v.name} src={v.avatar} />}
          label={v.name}
          variant="outlined"
          color="secondary"
          onClick={() => {
            console.info('You clicked the Chip.');
            props.onChange(v.defaultValues)
          }} />
      )}
    </div>
  )
}

export default PreConfigPayments