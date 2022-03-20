import { OpeningTimes, Space } from "../types";
/**
 * Fetches upcoming availability for a space
 * @param space The space to fetch the availability for
 * @param numberOfDays The number of days from `now` to fetch availability for
 * @param now The time now
 */
export const fetchAvailability = (
  space: Space,
  numberOfDays: number,
  now: Date
): Record<string, OpeningTimes> => {
  // Your implementation here
  return {
    "2022-03-21": {
      open: {
        hour: 9,
        minute: 0,
      },
      close: {
        hour: 17,
        minute: 0,
      },
    },
    "2022-03-22": {
      open: {
        hour: 9,
        minute: 0,
      },
      close: {
        hour: 17,
        minute: 0,
      },
    },
    "2022-03-23": {
      open: {
        hour: 9,
        minute: 0,
      },
      close: {
        hour: 17,
        minute: 0,
      },
    },
    "2022-03-24": {
      open: {
        hour: 9,
        minute: 0,
      },
      close: {
        hour: 17,
        minute: 0,
      },
    },
    "2022-03-25": {
      open: {
        hour: 9,
        minute: 0,
      },
      close: {
        hour: 17,
        minute: 0,
      },
    },
    "2022-03-26": {},
    "2022-03-27": {},
  };
};
