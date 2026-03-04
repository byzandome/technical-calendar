import { format } from "date-fns";
import { useMemo } from "react";
import { HOURS_STEPS } from "./constants/hours";
import { cn } from "./utils/styles";
import useEvents from "./stores/useEvents";

const MINUTES_PER_ROW = 30;

export default function App() {
  const steps = useMemo(() => HOURS_STEPS, []);
  const events = useEvents((state) => state.events);

  return (
    <div className="w-full h-screen  flex items-center justify-center">
      <div className="calendar-grid relative max-h-180 gap-x-2">
        {steps.map((step, rowIndex) => (
          <div
            key={step.getHours()}
            className="relative col-start-0 row-start-0"
            style={{ gridRow: rowIndex + 1 }}
          >
            <div className=" flex items-start justify-end absolute right-0 -top-3">
              <div className="flex items-end gap-1">
                <span
                  className={cn("text-xs", {
                    "font-bold text-sm": step.getMinutes() === 0,
                    "text-gray-500": step.getMinutes() !== 0,
                  })}
                >
                  {format(step, "hh:mm")}
                </span>
                {step.getMinutes() === 0 && (
                  <span className="text-[10px] text-gray-500">
                    {format(step, "a")}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="col-start-2 row-start-0 row-end-25 bg-gray-400 border-l-2 border-l-gray-700 absolute w-full h-full opacity-20" />

        {events.map((event, index) => (
          <div
            key={index}
            className="mx-2.5 w-full h-full relative bg-white border border-gray-300 p-2  text-sm overflow-hidden cursor-pointer transition-colors after:absolute after:content-[''] after:left-0 after:w-1 after:inset-0 after:bg-blue-800"
            style={{
              gridColumn: 2,
              gridRow: `calc(2 + ${(event.start - 9 * 60) / MINUTES_PER_ROW}) / span ${Math.max((event.end - event.start) / MINUTES_PER_ROW, 1)}`,
            }}
          >
            <div className="font-semibold text-blue-600">Lorem</div>
            <div className="text-xs opacity-80">
              {format(
                new Date().setHours(
                  Math.floor(event.start / 60),
                  event.start % 60,
                ),
                "hh:mm a",
              )}{" "}
              -{" "}
              {format(
                new Date().setHours(Math.floor(event.end / 60), event.end % 60),
                "hh:mm a",
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
