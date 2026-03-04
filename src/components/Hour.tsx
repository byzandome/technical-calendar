import { format } from "date-fns";
import { cn } from "../utils/styles";
import { useMemo } from "react";

type HourProps = {
  hour: Date;
};

export default function Hour({ hour }: HourProps) {
  const isFullHour = useMemo(() => hour.getMinutes() === 0, [hour]);
  return (
    <div className=" flex items-start justify-end absolute right-0 -top-3">
      <div className="flex items-end gap-1">
        <span
          className={cn("text-xs", {
            "font-bold text-sm": isFullHour,
            "text-gray-500": !isFullHour,
          })}
        >
          {format(hour, "hh:mm")}
        </span>
        {isFullHour && (
          <span className="text-[10px] text-gray-500">{format(hour, "a")}</span>
        )}
      </div>
    </div>
  );
}
