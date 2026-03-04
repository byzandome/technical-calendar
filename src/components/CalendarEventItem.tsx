import { format } from "date-fns";

type EventProps = {
	start: Date;
	end: Date;
};

const FORMAT_HOUR = "hh:mm a";

export default function CalendarEventItem({ start, end }: EventProps) {
	return (
		<div className="flex h-full flex-col gap-1 w-full relative bg-white border border-gray-300 p-2 text-sm overflow-hidden cursor-pointer after:absolute after:content-[''] after:left-0 after:w-1 after:inset-0 after:bg-blue-800">
			<div className="font-semibold text-blue-600">Lorem</div>
			<div className="text-xs opacity-80">
				{format(start, FORMAT_HOUR)} - {format(end, FORMAT_HOUR)}
			</div>
		</div>
	);
}
