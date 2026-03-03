import { create } from 'zustand'

type Event = {
    start: number;
    end: number;
}

type EventsState = {
    events: Event[];
    populateEvents: (events: Event[]) => void;
}

const useEvents = create<EventsState>((set) => ({
  events: [],
  populateEvents: (events) => set({ events }),
}))

export default useEvents