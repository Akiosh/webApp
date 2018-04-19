import React from "react";
import { render } from "react-dom";
import { TodoApp } from "./Components/todoApp.jsx";
import styles from "./style.css";

const App = () => (
  <div>
   <TodoApp/>
  </div>
);

render(<App />, document.getElementById("root"));
