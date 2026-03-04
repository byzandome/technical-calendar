import type { EventCalendar } from "../stores/useEvents";
import { dateToMinutes } from "./date";

export function calculateEventLayout(events: EventCalendar[]): EventCalendar[] {
	if (events.length === 0) return [];

	const eventWithMinutes = events
		.map((e) => ({
			...e,
			startInMinutes: dateToMinutes(e.start),
			endInMinutes: dateToMinutes(e.end),
		}))
		.sort((a, b) => a.startInMinutes - b.startInMinutes);

	const result: EventCalendar[] = [];
	let groupStart = 0;

	while (groupStart < eventWithMinutes.length) {
		const columns: number[] = [];
		const eventColumns: number[] = [];
		const groupEvents: typeof eventWithMinutes = [];

		for (let i = groupStart; i < eventWithMinutes.length; i++) {
			const event = eventWithMinutes[i];

			if (groupEvents.length > 0) {
				const groupEnd = Math.max(...groupEvents.map((e) => e.endInMinutes));
				if (event.startInMinutes >= groupEnd) {
					break;
				}
			}

			groupEvents.push(event);
		}

		for (const event of groupEvents) {
			const columnIndex = columns.findIndex(
				(endMin) => endMin <= event.startInMinutes,
			);

			if (columnIndex === -1) {
				eventColumns.push(columns.length);
				columns.push(event.endInMinutes);
			} else {
				eventColumns.push(columnIndex);
				columns[columnIndex] = event.endInMinutes;
			}
		}

		const totalColumns = Math.max(columns.length, 1);

		for (let i = 0; i < groupEvents.length; i++) {
			const column = eventColumns[i];
			result.push({
				...groupEvents[i],
				position: column,
				totalPositions: totalColumns,
				left: column / totalColumns,
				width: 1 / totalColumns,
			});
		}

		groupStart += groupEvents.length;
	}

	return result;
}
