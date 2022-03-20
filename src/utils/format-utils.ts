import dayjs from "dayjs";
import {
  displayTime,
  timeSlotsAsString,
  timezoneShortcode,
} from "./time-utils";
import { formats } from "../constants";
import { OpeningTimes } from "../types";

export const datesOpen = (
  availableDates: Record<string, OpeningTimes>
): string[] | undefined =>
  Object.keys(availableDates).filter((date) => availableDates[date]?.open);

/**
 * Fetches availability for a space
 * @param dates Key of dates return in fetch call
 * @param timezone The timezone of the available space
 * @param availableDates Dates that are available
 */
export const availability = (
  dates: string[] | undefined,
  timezone: string,
  availableDates: Record<string, OpeningTimes> | undefined
) =>
  dates?.map((date) => {
    if (availableDates) {
      const openTime = displayTime(
        availableDates[date]?.open?.hour,
        availableDates[date]?.open?.minute
      );
      const closeTime = displayTime(
        availableDates[date]?.close?.hour,
        availableDates[date]?.close?.minute
      );
      return {
        day: dayjs(date).format(formats.displayDate),
        openingHours: `${openTime} - ${closeTime} ${timezoneShortcode(
          date,
          timezone
        )}`,
        timeSlots: timeSlotsAsString(
          (availableDates[date]?.close?.hour || 17) -
            (availableDates[date]?.open?.hour || 9),
          availableDates[date]?.open?.hour
        ),
      };
    }
  });
