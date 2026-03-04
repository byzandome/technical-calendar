import z from "zod";
import { HOUR_END, HOUR_START, MINUTES_PER_HOUR } from "../constants/hours";
const MAX_MINUTES = (HOUR_END - HOUR_START) * MINUTES_PER_HOUR;

export const eventSchema = z
	.object({
		start: z
			.number()
			.min(0, { message: "Start time must be greater than or equal to 0" })
			.max(MAX_MINUTES - 1, {
				message: `Start time must be less than ${HOUR_END - HOUR_START} hours in minutes (${MAX_MINUTES - 1} minutes)`,
			}),
		end: z
			.number()
			.min(1, { message: "End time must be greater than start time" })
			.max(MAX_MINUTES, {
				message: `End time must be less than or equal to ${HOUR_END - HOUR_START} hours in minutes (${MAX_MINUTES} minutes)`,
			}),
	})
	.refine((data) => data.end > data.start, {
		message: "End time must be after start time",
	});
