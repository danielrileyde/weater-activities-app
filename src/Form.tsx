import { FormEvent } from "react";
import { uid } from "uid";

export type Activity = {
  id: string;
  name: FormDataEntryValue;
  isForGoodWeather: boolean;
};

interface FormProps {
  onAddActivity: (activity: Activity) => void;
}

export const Form = ({ onAddActivity }: FormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //@ts-ignore
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const activity = {
      id: uid(),
      name: data.name,
      isForGoodWeather: data.checkbox === "on" ? true : false,
      // same thing as above ^^^^^ !data.checkbox==="on";
    };

    onAddActivity(activity);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Activity</h3>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />
      <label htmlFor="checkbox">Is good weather activity:</label>
      <input type="checkbox" id="checkbox" name="checkbox" />
      <button>Submit</button>
    </form>
  );
};
