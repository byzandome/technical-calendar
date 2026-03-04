import { useMemo } from "react";
import CalendarEvent from "./components/Event";
import Hour from "./components/Hour";
import {
  HOUR_START,
  HOURS_STEPS,
  MINUTES_PER_HOUR,
  MINUTES_PER_ROW,
} from "./constants/hours";
import useEvents from "./stores/useEvents";
import { generateUniqueId } from "./utils/id";

export default function App() {
  const steps = useMemo(() => HOURS_STEPS, []);
  const events = useEvents((state) => state.events);

  return (
    <div className="w-full h-screen  flex items-center justify-center">
      <div className="flex gap-x-2">
        {/* Hours column */}
        <div className="w-25 relative pt-0">
          {steps.map((step, rowIndex) => (
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
          ))}
        </div>

        {/* Calendar content */}
        <div
          className="relative w-155 bg-gray-100 border-l-2 border-l-gray-200"
          style={{ height: `${(steps.length - 1) * MINUTES_PER_ROW}px` }}
        >
          <div className="relative mx-2.5">
            {/* Events */}
            {events.map((event, index) => {
           
              const minutesFromStart = event.startInMinutes - HOUR_START * MINUTES_PER_HOUR;
              const duration = event.endInMinutes - event.startInMinutes;
              const pixelHeight = duration;
              const pixelTop = minutesFromStart;
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
                  <CalendarEvent start={event.start} end={event.end} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
