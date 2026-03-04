import { eachMinuteOfInterval } from "date-fns";

export const HOUR_START = 9;
export const HOUR_END = 21;
export const RANGE_HOUR_START = new Date().setHours(HOUR_START, 0, 0, 0);
export const RANGE_HOUR_END = new Date().setHours(HOUR_END, 0, 0, 0);
export const HOURS_STEPS = eachMinuteOfInterval(
	{
		end: RANGE_HOUR_END,
		start: RANGE_HOUR_START,
	},
	{
		step: 30,
	},
);
