import { hoursToMinutes } from "date-fns";

export function dateToMinutes(date: Date): number {
	return hoursToMinutes(date.getHours()) + date.getMinutes();
}
