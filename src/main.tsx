import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import useEvents, { type EventDatasource } from "./stores/useEvents";

window.layOutDay = function (events: EventDatasource[]) {
	const populateEvents = useEvents.getState().populateEvents;
	populateEvents(events);
};

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
