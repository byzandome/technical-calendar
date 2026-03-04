import { useMemo } from "react";
import { HOURS_STEPS, MINUTES_PER_ROW } from "../constants/hours";
import { generateUniqueId } from "../utils/id";
import Hour from "./CalendarHourItem";

export default function CalendarHourList() {
	const steps = useMemo(() => HOURS_STEPS, []);

	return steps.map((step, rowIndex) => (
		<div
			key={generateUniqueId(
				"step",
				step.getHours().toString(),
				rowIndex.toString(),
			)}
			className="absolute right-0"
			style={{ top: `${rowIndex * MINUTES_PER_ROW}px` }}
		>
			<div className="absolute right-0 -top-3">
				<Hour date={step} />
			</div>
		</div>
	));
}
