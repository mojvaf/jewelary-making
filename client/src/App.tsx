import React from "react";
import { useAppRoutes } from "./hook/useAppRoutes";
import "./App.css";
import "./queries.css";

function App() {
  const routesRendered = useAppRoutes();

  return <div className="App">{routesRendered}</div>;
}

export default App;
