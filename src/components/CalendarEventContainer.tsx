import { HOUR_START, MINUTES_PER_HOUR } from "../constants/hours";
import useEvents from "../stores/useEvents";
import { generateUniqueId } from "../utils/id";
import CalendarEventItem from "./CalendarEventItem";

export default function CalendarEventContainer() {
  const events = useEvents((state) => state.events);


  return (
    <div className="relative mx-2.5">
      {/* Events */}
      {events.map((event, index) => {
        const pixelTop = event.startInMinutes - HOUR_START * MINUTES_PER_HOUR;
        const pixelHeight = event.endInMinutes - event.startInMinutes;

        return (
          <div
            key={generateUniqueId(
              event.startInMinutes.toString(),
              event.endInMinutes.toString(),
              index.toString(),
            )}
            className="absolute"
            style={{
              top: `${pixelTop}px`,
              height: `${pixelHeight}px`,
              width: `calc(${event.width * 100}%)`,
              left: `calc(${event.left * 100}%)`,
            }}
          >
            <CalendarEventItem start={event.start} end={event.end} />
          </div>
        );
      })}
    </div>
  );
}
