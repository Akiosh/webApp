import React, { Component } from "react";
//import { ListContainer } from "./list-container";
import { Title } from "./title.jsx";
import { TodosList } from "./todosList.jsx";
import styles from "../css/todo-app.css";

export const TodoApp = ({ name }) => {
  const appTitle = "Your Todos.";
  return (
    <div class="todo-app">
      <Title title={appTitle} />
      <TodosList />
    </div>
  );
};
