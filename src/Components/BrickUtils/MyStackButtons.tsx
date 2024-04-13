import { Button, Divider, Stack } from '@mui/material'
import MyProps from './MyProps';
import MyElement from './MyElement';

function MyStackButtons(props: Props) {

    return (
        <div>
          <p>{props.label} {props.parentProps.defaultValue}</p>
          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" divider={<Divider orientation="vertical" flexItem />} >
            {props.values.map(v =>
              <Button startIcon={v.icon} onClick={() => {props.parentProps.onChange(v.value)}} color={v.value == props.parentProps.defaultValue ? "primary" : "secondary" } >
                <div><small>{v.label}</small></div>
              </Button>
            )}
          </Stack>
        </div>
    )
}

class Props {
	parentProps: MyProps<string>;
	label: string;
    values: MyElement[];

	constructor(parentProps: MyProps<string>, label:string, values: MyElement[]) {
		this.parentProps = parentProps;
		this.label = label;
        this.values = values;
	}
}
export default MyStackButtons