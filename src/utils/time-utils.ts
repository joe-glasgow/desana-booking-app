import dayjs from "./dayjs";
import { formats } from "../constants";
import { IUIDate } from "../types/";

export const timezoneShortcode = (date, timeZone): string =>
  dayjs.tz(date, timeZone).format(formats.shortCode);

export const timeAsInteger = (timeString: string): number =>
  parseInt(timeString.replace(":", ""), 10);

export const integerAsTime = (integer: number): string => {
  const numbers = String(integer).split("");
  numbers.splice(2, 0, ":");
  return numbers.join("");
};

const railwayTimeString = (num?: number): string => {
  const numberAsString = String(num);
  if (numberAsString.length <= 1) {
    return numberAsString.padStart(2, "0");
  }
  return numberAsString;
};

export const timeSlotsAsString = (
  hours?: number,
  startTime?: number
): string[] => {
  const slots: string[] = [];
  const intervals = ["00", "15", "30", "45"];
  Array.from(Array(hours).keys()).forEach(() => {
    intervals.forEach((slot) => {
      slots.push(`${startTime}:${slot}`);
    });
    if (startTime) {
      startTime += 1;
    }
  });
  return slots;
};

export const displayTime = (hour?: number, minute?: number): string =>
  `${railwayTimeString(hour)}:${railwayTimeString(minute)}`;

export const availableTimeSlots = (chosenDay: IUIDate, time): string[] => {
  const slotsFrom = timeAsInteger(time);
  const slots = chosenDay.timeSlots.map((time) => timeAsInteger(time));
  return slots
    .filter((time) => time > slotsFrom)
    .map((integer) => integerAsTime(integer));
};
