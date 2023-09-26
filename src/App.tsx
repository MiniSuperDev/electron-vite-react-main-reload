import { useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState("");
  return (
    <div className="App">
      <button
        onClick={async () => {
          const state = await window.api.getDate();

          setDate(state);
        }}
      >
        Get Date from Main Process
      </button>
      <p>{date}</p>
    </div>
  );
}

export default App;
