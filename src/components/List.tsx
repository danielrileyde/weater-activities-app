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
      <div className="weather__title">
        {" "}
        {weather && (
          <h2>
            {weather.isGoodWeather
              ? "Good Weather Activities"
              : "Bad Weather Activities"}
          </h2>
        )}
      </div>
      <ul className="list__section">
        {items.map((item) => (
          <li className="list__item" key={item.id}>
            {item.name}
            <button
              className="list__button"
              onClick={() => onDeleteActivity(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
