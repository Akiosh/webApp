import React, { Component } from 'react';
import {Item} from '../components/item.jsx';
import {Form} from '../components/addNewItem.jsx';
import {PlaceHolder} from '../components/placeHolder';
import LocalStorageTodosListDAO from '../dao/LocalStorageTodosListDAO';
import TodoService from  '../js/TodoService.js';
import TodosListService from  '../js/TodosListService.js';
import style from '../css/todos-list.css';

export class TodosList extends Component {
  constructor(props) {
    super(props);
    
    this.todosListDAO = new LocalStorageTodosListDAO();
    this.todosListDAO.setListener(function (todos){
      this.setState(todos);
    }.bind(this));
    
    this.todoListService = new TodosListService (new TodoService());
  }

  state = {
    list: []
  }


  componentDidMount() {
    this.todosListDAO.getAllTodos()
      .then( ( {list} ) => {
        this.setState({
          list: list
        });
      });
    }

  handleLike (id, isLiked) {
    this.todosListDAO.saveAllTodos({
      list: this.todoListService.updateTodoElem(this.state.list, id, {isLiked: isLiked})
    });
  }

  handleCompleted (id, isComleted) {
    this.todosListDAO.saveAllTodos({
      list: this.todoListService.updateTodoElem(this.state.list, id, {isCompleted: isComleted})
    });
  }

  handleAddingItem ({title, description}){
    this.todosListDAO.saveAllTodos({
      list: this.todoListService.addTodoItem (this.state.list, {title, description})
    });
  }

  handleAddingComment (id, comment) {
    this.todosListDAO.saveAllTodos({
      list:  this.todoListService.updateTodoElem(this.state.list, id, {comment: comment})
    });
  }

  handleEditItem(id, {title, description}){
    this.todosListDAO.saveAllTodos({
      list: this.todoListService.updateTodoElem(this.state.list, id, {
            title: title,
            description: description
          })
    });
  }

  handleRemoveTodoElem (id){
    this.todosListDAO.saveAllTodos({
        list: this.todoListService.removeTodoElem(this.state.list, id),
      }
    )
  }

  render() {
    const list = this.state.list;
    return (
        <div className = 'container'>
          <ul className = 'todos-list'>
          {(list.length == 0)
            ? <PlaceHolder />
            :list.map((item) => {
                return( <Item 
                className = 'todo'
                {...item} 
                onClickLike={this.handleLike.bind(this)}
                onClickCompleted = {this.handleCompleted.bind(this)}
                onAddingComment={this.handleAddingComment.bind(this)}
                onEditItem = {this.handleEditItem.bind(this)}
                removeItem = {(id) => this.handleRemoveTodoElem(id)}
                />);
            })
            } 
          </ul>
          <Form onAddingItem = {this.handleAddingItem.bind(this)}/>
        </div>
      
    );
  }
}
