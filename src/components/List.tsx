import { Activity } from "./Form";

interface ListProps {
  items: Activity[];
  isGoodWeather: boolean | undefined;
  onDeleteActivity: (id: string) => void;
}

export const List = ({ items, isGoodWeather, onDeleteActivity }: ListProps) => {
  return (
    <>
      <h2>{isGoodWeather ? "awsome weather" : "shite weather"}</h2>
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
