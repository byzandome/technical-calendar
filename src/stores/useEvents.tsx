import { addMinutes } from "date-fns";
import { create } from "zustand";
import { RANGE_HOUR_START } from "../constants/hours";
import { dateToMinutes } from "../utils/date";
import { calculateEventLayout } from "../utils/layout";
import { z } from "zod";
import { eventSchema } from "../validation/events";

export type EventCalendar = {
	start: Date;
	end: Date;
	left: number;
	width: number;
	position: number;
	totalPositions: number;
	startInMinutes: number;
	endInMinutes: number;
};

export type EventDatasource = {
	start: number;
	end: number;
};

type EventsState = {
	events: EventCalendar[];
	populateEvents: (events: EventDatasource[]) => void;
};

const useEvents = create<EventsState>((set) => ({
	events: [],
	populateEvents: (
		events = [
			{ start: 30, end: 150 },
			{ start: 540, end: 600 },
			{ start: 560, end: 620 },
			{ start: 590, end: 670 },
		],
	) => {
		const eventsSchema = z.array(eventSchema);
		try {
			eventsSchema.parse(events);
		} catch (error) {
			if (error instanceof z.ZodError) {
				console.error("Validation errors");
				console.table(error.issues);
			} else {
				console.error("Unexpected error:", error);
			}
			return;
		}
		const formattedEvents: EventCalendar[] = events.map((event) => {
			const start = addMinutes(RANGE_HOUR_START, event.start);
			const end = addMinutes(RANGE_HOUR_START, event.end);

			return {
				start,
				end,
				startInMinutes: dateToMinutes(start),
				endInMinutes: dateToMinutes(end),
				left: 0,
				width: 1,
				position: 0,
				totalPositions: 1,
			};
		});

		const eventsWithLayout = calculateEventLayout(formattedEvents);

		set({ events: eventsWithLayout });
	},
}));

export default useEvents;
