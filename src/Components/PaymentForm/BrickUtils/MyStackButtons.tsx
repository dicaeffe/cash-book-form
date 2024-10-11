import { Button, Divider, Stack } from '@mui/material'
import MyElement from '../Model/MyElement';

function MyStackButtons(props: Props) {

  function isSelected(value: string): boolean {
    return value == props.defaultValue;
  }

  return (
    <div>
      <p>{props.label} {props.defaultValue}</p>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" divider={<Divider orientation="vertical" flexItem />} >
        {props.values.map(v =>
          <div key={v.key}>
            <Button
              startIcon={v.icon}
              onClick={() => { props.onChange(v.value) }}
              color={isSelected(v.value) ? "primary" : "secondary"} >
              <div><small>{v.label}</small></div>
            </Button>
          </div>
        )}
      </Stack>
    </div>
  )
}

class Props {
  defaultValue?: string | null;
  label: string;
  values: MyElement[];
  onChange: (d: string) => void;

  constructor(defaultValue: string, label: string, values: MyElement[], onChange: (d: string) => void) {
    this.defaultValue = defaultValue;
    this.label = label;
    this.values = values;
    this.onChange = onChange;
  }
}
export default MyStackButtons