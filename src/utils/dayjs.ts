import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advanced from "dayjs/plugin/advancedFormat";
// TODO: Mocha issues if dayjs wasn't optional
dayjs?.extend(utc);
dayjs?.extend(timezone);
dayjs?.extend(advanced);

export default dayjs;
