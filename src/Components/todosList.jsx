import React, { Component } from "react";
import {Item} from "./item.jsx";
import {Form} from "./addNewItem.jsx";

import style from "../css/todos-list.css";
import {addTodoItem, updateTodoElem, removeTodoElem} from "../js/todosAPI.js";
// import cuid from "cuid";
// import { Form } from "./form";
// import { List } from "./list";
// import { data } from "./data";

export class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: []
    };
  }

  componentWillMount(){

    this.setState({
      list: [
        {
          id: "123",
          title: "title1",
          description: "des1",
        },
        {
          id: "124",
          title: "title2",
          description: "des2"
        }
      ]
    })
  }
  
  handleLike (id, isLiked) {
    this.setState({
     list: updateTodoElem(this.state.list, id, {isLiked: isLiked})
    });
  }

  handleAddingItem ({title, description}){
    this.setState({
      list: addTodoItem (this.state.list, {title, description})
     });
  }

  handleAddingComment (id, comment) {
    this.setState({
     list: updateTodoElem(this.state.list, id, {comment: comment})
    });
  }

  handleEditItem(id, {title, description}){
    this.setState({
      list: updateTodoElem(this.state.list, id, {
        title: title,
        description: description
      })
     });
  }

  handleRemoveTodoElem (id){
    this.setState({
      list: removeTodoElem(this.state.list, id),
    })
  }

  render() {
    const { list } = this.state;
    return (
   
        <div className = "container">
          <ul className = "todos-list">
          {(list.length == 0)
            ? <div>Not todos</div>  
            :list.map((item) => {
                return( <Item 
                className = "todo"
                {...item} 
                onClickLike={this.handleLike.bind(this)}
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
