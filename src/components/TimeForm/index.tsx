import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import React, { FC } from "react";
import TimeSelect from "../TimeSelect";
import { ITimeForm } from "../../types/";

const TimeForm: FC<ITimeForm> = ({ items }) => {
  const [selectedTime, setSelectedTime] = React.useState<string>("");
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Date</InputLabel>
        <TimeSelect
          value={selectedTime}
          items={items}
          onChange={(e) => setSelectedTime(e.target.value)}
        />
      </FormControl>
    </Box>
  );
};

export default TimeForm;
