import React from 'react';
//import { ListContainer } from "./list-container";
import { Title } from '../components/title.jsx';
import { TodosList } from './todosList.jsx';
import styles from '../css/todo-app.css';

export const TodoApp = () => {
  const appTitle = 'Your Todos.';
  return (
    <div class='todo-app'>
      <Title title={appTitle} />
      <TodosList />
    </div>
  );
};
