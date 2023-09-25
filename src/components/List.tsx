import { Weather } from "../App";
import { Activity } from "./Form";

interface ListProps {
  items: Activity[];
  onDeleteActivity: (id: string) => void;
  weather: Weather | undefined;
}

export const List = ({ items, onDeleteActivity, weather }: ListProps) => {
  return (
    <>
      {weather && (
        <h2>{weather.isGoodWeather ? "awsome weather" : "shite weather"}</h2>
      )}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => onDeleteActivity(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
