import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Graph from "./components/Graph";
import { ReactFlowProvider } from "reactflow";
import GitGraph from "./components/GitGraph";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ width: "800px", height: "350px", border: "solid black 3px" }}>
      <ReactFlowProvider>
        <GitGraph />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
