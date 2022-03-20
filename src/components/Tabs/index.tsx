import React, { FC } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TimeForm from "../TimeForm";
import { IDateTabs, TabPanelProps } from "../../types/";

const TabPanel: FC<TabPanelProps> = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`date-tabpanel-${index}`}
    aria-labelledby={`date-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const DateTabs: FC<IDateTabs> = ({ tabDates }) => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="date tabs">
          {tabDates.map((date, index) => (
            <Tab label={date.day} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>

      {tabDates.map((date, index) => (
        <TabPanel value={value} index={index}>
          <>
            <Typography>Opening Hours: {date.openingHours}</Typography>
            <TimeForm items={date.timeSlots} />
          </>
        </TabPanel>
      ))}
    </Box>
  );
};

export default DateTabs;
