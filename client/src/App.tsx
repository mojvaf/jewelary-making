import React from "react";
import { useAppRoutes } from "./routes";
import "./App.css";
import "./queries.css";

function App() {
  const routesRendered = useAppRoutes();

  return <div className="App">{routesRendered}</div>;
}

export default App;
