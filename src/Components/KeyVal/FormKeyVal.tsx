import { useState } from "react";
import KeyVal from "./Model/KeyVal";
import KeyField from "./KeyFrield";
import ValueField from "./ValueField";
import SendButton from "./SendButton";

const FormKeyVal = () => {
  const label = "FormKeyVal";
  const [keyValData, setKeyValData] = useState(new KeyVal("", ""));

  const onFormChange = (newData: KeyVal) => {
    setKeyValData(newData);
    console.info("---------New Value of KeyVal");
    console.info(newData);
    console.info(keyValData);
  };

  return (
    <div>
      <p>{label}</p>
      <KeyField data={keyValData} onChange={onFormChange} />
      <ValueField data={keyValData} onChange={onFormChange} />
      <SendButton data={keyValData} />
    </div>
  );
};

export default FormKeyVal;
