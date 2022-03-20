import React, { StrictMode } from "react";
import { render } from "react-dom";
import Typography from "@mui/material/Typography";
import { OpeningTimes, Space } from "./types";
import { availability, datesOpen, dayjs } from "./utils";
import { formats } from "./constants";
import { availableTimeSlots } from "./utils/time-utils";
import { IUIDate } from "./types/";
import { Dayjs } from "dayjs";
import DateTabs from "./components/Tabs";
import { fetchAvailability } from "./api";

const App = () => {
  const space: Space = { minimumNotice: 0, timeZone: "America/New_York" };
  const dates: Record<string, OpeningTimes> = fetchAvailability(
    space,
    7,
    new Date()
  );
  const open: string[] | undefined = datesOpen(dates);
  const now: Dayjs = dayjs.tz(dayjs(), space.timeZone);
  const today: string = now.format(formats.displayDate);
  const startFromTime: string = now
    .add(space.minimumNotice, "m")
    .format(formats.hourMinute);
  const displayData: IUIDate[] | undefined = availability(
    open,
    space.timeZone,
    dates
  )?.map((dayData: IUIDate) => {
    if (dayData.day === today) {
      return {
        ...dayData,
        timeSlots: availableTimeSlots(dayData, startFromTime),
      };
    }
    return dayData;
  });
  return (
    <div>
      <Typography variant="h1">Desana Booking App.</Typography>
      {displayData?.length && <DateTabs tabDates={displayData} />}
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app")
);
