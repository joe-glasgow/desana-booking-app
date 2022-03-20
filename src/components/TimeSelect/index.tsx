import React, { FC } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ITimeSelect } from "../../types/";

const TimeSelect: FC<ITimeSelect> = ({ items, onChange, value }) => (
  <Select
    labelId="time-select-label"
    id="time-select"
    value={value}
    label="Date"
    onChange={onChange}
  >
    {items.map((time) => (
      <MenuItem value={time}>{time}</MenuItem>
    ))}
  </Select>
);

export default TimeSelect;
