import { format } from "date-fns";
import { cn } from "../utils/styles";
import { useMemo } from "react";

type HourProps = {
	date: Date;
};

const FORMAT_HOUR = "hh:mm";

export default function Hour({ date: hour }: HourProps) {
	const isFullHour = useMemo(() => hour.getMinutes() === 0, [hour]);
	return (
		<div className="flex items-center justify-center">
			<div className="flex items-center gap-1">
				<span
					className={cn("text-sm leading-5", {
						"font-bold ": isFullHour,
						"text-gray-500 text-xs": !isFullHour,
					})}
				>
					{format(hour, FORMAT_HOUR)}
				</span>
				{isFullHour && (
					<span className="text-[10px] leading-5 text-gray-500">
						{format(hour, "a")}
					</span>
				)}
			</div>
		</div>
	);
}
