import { TextField } from "@mui/material";
import KeyVal from "./Model/KeyVal";

function ValueField(props: { data: KeyVal; onChange: (d: KeyVal) => void }) {
  const label = "Value";
  const id = "value-text";
  const helper = "helper da valorizzare";

  const handleFormChange = (e: { target: { value: any } }) => {
    let newData: KeyVal = props.data.clone();
    newData.value = e.target.value;
    console.info(newData);
    props.onChange(newData);
  };

  return (
    <div>
      <TextField
        label={label}
        required
        id={id}
        helperText={helper}
        defaultValue={props.data.value}
        onChange={(event) => handleFormChange(event)}
        type="text"
        margin="normal"
        fullWidth
      />
    </div>
  );
}

export default ValueField;
