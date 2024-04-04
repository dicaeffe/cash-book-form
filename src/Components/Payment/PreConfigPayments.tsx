import MyPreConfig from '../BrickUtils/MyPreConfig';
import MyProps from '../BrickUtils/MyProps';
import { Chip, Avatar } from '@mui/material';

function PreConfigPayments(props:MyProps<MyPreConfig[]>) {

  const values = [{
    key: 1,
    name: "Conad",
    avatar: "/src/static/images/avatar/Conad.png",
    defaultValues: [
      new MyPreConfig(null, "spesaCasa", "Spesa al Conad", "buoniPasto", "out"),
      new MyPreConfig(null, "spesaCasa", "Spesa al Conad", "ccWebank", "out")
    ]
  },{
    key: 2,
    name: "Gros",
    avatar: "Gros",
    defaultValues: [
      new MyPreConfig(null, "spesaCasa", "Spesa al Gros", "buoniPasto", "out"),
      new MyPreConfig(null, "spesaCasa", "Spesa al Gros", "ccIllimity", "out")
    ]
  },{
    key: 3,
    name: "Style",
    avatar: "S",
    defaultValues: [
      new MyPreConfig(null, "ciboUfficio", "Pranzo da Style", "buoniPasto", "out"),
      new MyPreConfig(null, "ciboUfficio", "Pranzo da Style", "ccIllimity", "out")
    ]
  }
  ]

  return (
    <div>
      PreConfig Payments
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