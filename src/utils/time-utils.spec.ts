import * as expect from "expect";
import { timeAsInteger } from "./time-utils";

describe("src/utils/time-utils", () => {
  describe("Timezone shortcode", () => {
    it("returns an EDT shortcode given American/New_York zone and date", () => {
      expect(timeAsInteger("09:15")).toBe(915);
    });
    it("returns NaN when no string provided", () => {
      expect(timeAsInteger("")).toBe(NaN);
    });
    it("returns error when no data provided", () => {
      try {
        // need to ignore ts error warning for test to pass
        // @ts-ignore
        timeAsInteger();
      } catch (e) {
        expect(e).toStrictEqual(
          new TypeError("Cannot read property 'replace' of undefined")
        );
      }
    });
  });
});
