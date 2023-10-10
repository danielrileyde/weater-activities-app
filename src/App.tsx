import { useEffect, useState } from "react";
import "./App.css";
import { Activity, Form } from "./components/Form";
import { List } from "./components/List";
import useLocalStorageState from "use-local-storage-state";

export type Weather = {
  location: string;
  temperature: number;
  condition: string;
  isGoodWeather: boolean | undefined;
};

function App() {
  const [activities, setActivities] = useLocalStorageState<Activity[]>(
    "activities",
    { defaultValue: [] }
  );
  const [weather, setWeather] = useState<Weather | undefined>();

  const fetchWeather = async () => {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const weather = await response.json();

    setWeather(weather);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      fetchWeather();
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAddActivity = (activity: Activity) => {
    setActivities([...activities, activity]);
  };

  const handleDeleteActivity = (id: string) => {
    const filteredActivities = activities.filter(
      (activity) => activity.id !== id
    );
    setActivities(filteredActivities);
  };

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather?.isGoodWeather
  );

  return (
    <>
      {weather && (
        <h1>
          {weather.condition} {weather.temperature} °C
        </h1>
      )}
      <List
        items={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
        weather={weather}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
