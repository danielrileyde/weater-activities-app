import "./App.css";
import { Activity, Form } from "./Form";

function App() {
  return (
    <>
      <Form
        onAddActivity={(activity: Activity) =>
          console.log("Added Activity", activity)
        }
      />
    </>
  );
}

export default App;
