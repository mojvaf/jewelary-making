import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import './queries.css'
function App() {
  const routesRendered = useRoutes(routes);

  return <div className="App">{routesRendered}</div>;
}

export default App;
