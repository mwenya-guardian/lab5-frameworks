import { useState } from "react";
import "./styles.css";

function Welcome({ name }) {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome, {name}!</h1>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>
      {showMessage && <p>This is a toggled message using useState!</p>}
    </div>
  );
}

export default function App() {
  return <Welcome name="Guardian" />;
}
