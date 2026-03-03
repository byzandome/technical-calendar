import useEvents from "./stores/useEvents";

export default function App() {
  const events = useEvents((state) => state.events);

  return (
    <div className="App">
      <code>{JSON.stringify(events, null, 2)}</code>
    </div>
  );
}
