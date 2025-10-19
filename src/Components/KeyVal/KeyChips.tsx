import { Chip } from "@mui/material";
import KeyVal from "./Model/KeyVal";
import { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";

function KeyChips(props: { data: KeyVal; onChange: (d: KeyVal) => void }) {
  const [keyList, setKeyList] = useState<{ data: KeyVal[] }>({ data: [] });
  const label = "KeyChips";
  const keyListUrl =
    "https://lab.dicaeffe.mooo.com/cash-book/1.0.0/keyval/keys";
  //"https://fdcmock.free.beeceptor.com/keyval/keys";
  //"https://lab.dicaeffe.mooo.com/cash-book/1.0.0/keyval/keys";

  const onKeySelection = (key: string) => {
    let newData: KeyVal = props.data.clone();
    newData.key = key;
    console.info(newData);
    props.onChange(newData);
  };

  useEffect(() => {
    fetch(keyListUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.info(response);
        if (response.ok) {
          return response.json();
        } else {
          console.error("Error fetching keys data");
          return { data: [] };
        }
      })
      .then((responseBody) => {
        setKeyList(responseBody);
      })
      .catch((error) => {
        console.error("Error fetching keys data", error);
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <p>{label}</p>
      {keyList?.data.map((v) => (
        <Badge badgeContent={v.count} color="primary">
          <Chip
            key={v.key}
            label={v.key}
            variant="outlined"
            color="secondary"
            onClick={() => {
              console.info("You clicked the Chip.");
              onKeySelection(v.key);
            }}
          />
        </Badge>
      ))}
    </div>
  );
}

export default KeyChips;
