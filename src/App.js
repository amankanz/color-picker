import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <main className="App">
      <h1>Color Picker</h1>
      <input
        type="text"
        value={color}
        placeholder="Enter a valid color value"
        onChange={(e) => setColor(e.target.value)}
      />
      <section
        style={{ backgroundColor: color, width: "100vw", height: "50vh" }}
      >
        Color will appear here.
      </section>
    </main>
  );
}

export default App;
