import * as expect from "expect";
import { fetchAvailability } from "./index";
import { Space } from "../types";

describe("src/index", () => {
  describe("a space with no advance notice", () => {
    let space: Space;
    before(async () => {
      space = await import("../../fixtures/space-with-no-advance-notice.json");
    });

    it("fetches availability for a space after the space has already opened", () => {
      const availability = fetchAvailability(
        space,
        1,
        new Date(Date.UTC(2020, 8, 7, 15, 22))
      );

      expect(availability).toStrictEqual({
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
      });
    });
  });
});
