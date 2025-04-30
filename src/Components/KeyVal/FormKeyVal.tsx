import { useState } from "react";
import KeyVal from "./Model/KeyVal";
import ValueField from "./ValueField";
import SendButton from "./SendButton";
import KeyChips from "./KeyChips";
import KeyField from "./KeyField";

const FormKeyVal = () => {
  const label = "FormKeyVal";
  const [keyValData, setKeyValData] = useState(new KeyVal("", ""));

  const onFormChange = (newData: KeyVal) => {
    setKeyValData(newData);
    console.info("---------New Value of KeyVal");
    console.info(newData);
  };

  return (
    <div>
      <p>{label}</p>
      <KeyField data={keyValData} onChange={onFormChange} />
      <ValueField data={keyValData} onChange={onFormChange} />
      <SendButton data={keyValData} />
      <KeyChips data={keyValData} onChange={onFormChange} />
    </div>
  );
};

export default FormKeyVal;
