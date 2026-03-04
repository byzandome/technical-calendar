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
    <div className="w-full h-full overflow-auto flex items-center justify-center">
      <div className="calendar-grid relative">
        {steps.map((step, rowIndex) => (
          <div
            key={step.getHours()}
            className="col-start-0 row-start-0 flex items-end justify-center gap-1 border-t border-r border-gray-400 pr-2"
            style={{ gridRow: rowIndex + 1 }}
          >
            <span className={cn({ "font-bold": step.getMinutes() === 0 })}>
              {format(step, "hh:mm")}
            </span>
            {step.getMinutes() === 0 && (
              <span className="text-xs">{format(step, "a")}</span>
            )}
          </div>
        ))}

        {events.map((event, index) => (
          <div
            key={index}
            className="mx-2.5 w-full h-full absolute bg-blue-500 text-white rounded p-2 m-1 text-sm overflow-hidden cursor-pointer hover:bg-blue-600 transition-colors"
            style={{
              gridColumn: 2,
              gridRow: `calc(2 + ${(event.start - 9 * 60) / MINUTES_PER_ROW}) / span ${Math.max((event.end - event.start) / MINUTES_PER_ROW, 1)}`,
            }}
          >
            <div className="font-semibold">Lorem</div>
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
