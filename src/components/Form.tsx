import { FormEvent } from "react";
import { uid } from "uid";

export type Activity = {
  id: string;
  name: string;
  isForGoodWeather: boolean;
};

interface FormProps {
  onAddActivity: (activity: Activity) => void;
}

export const Form = ({ onAddActivity }: FormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // these next two lines, compile or aggregrate the information/data submitted in our form
    //@ts-ignore
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const activity: Activity = {
      id: uid(),
      name: data.name as string,
      isForGoodWeather: data.checkbox === "on" ? true : false,
      // same thing as above ^^^^^ !data.checkbox==="on";
    };

    onAddActivity(activity);
    //@ts-ignore
    event.target.reset();
    //@ts-ignore
    event.target.elements.name.focus();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form__title">Add New Activity</h3>
      <label className="input__label" htmlFor="name">
        Name:
      </label>
      <input className="input_input" type="text" id="name" name="name" />
      <label className="checkbox__label" htmlFor="checkbox">
        Is good weather activity:
      </label>
      <input
        className="checkbox__checkbox"
        type="checkbox"
        id="checkbox"
        name="checkbox"
      />
      <button className="submit__button">Submit</button>
    </form>
  );
};
