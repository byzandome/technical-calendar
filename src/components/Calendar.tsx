import { MINUTES_PER_ROW, STEPS_SECTIONS } from "../constants/hours";
import CalendarEventContainer from "./CalendarEventContainer";
import CalendarHourList from "./CalendarHourList";

export default function Calendar() {
  return (
    <div className="flex gap-x-2 w-255 justify-center">
      {/* Hours column */}
      <div className="w-25 relative pt-0">
        <CalendarHourList />
      </div>

      {/* Calendar content */}
      <div
        className="relative max-w-155 w-full bg-gray-100 border-l-2 border-l-gray-200"
        style={{ height: `${STEPS_SECTIONS * MINUTES_PER_ROW}px` }}
      >
        <CalendarEventContainer />
      </div>
    </div>
  );
}
