import React, { Component } from "react";
import style from "../css/add-new-item.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.descriptionInput = React.createRef();
  }
  
  handleClick = input => {
    const title = this.titleInput.current.value;
    this.titleInput.current.value = "";
    const description = this.descriptionInput.current.value;
    this.descriptionInput.current.value = "";
    this.props.onAddingItem({title, description});
  };

  render() {
    return (
      <div className="add-todo">
        <input className="add-todo__input_title" ref={this.titleInput} placeholder="Title"/>
        <textarea className="add-todo__input_description" ref={this.descriptionInput} placeholder="Description"/> 
        <button className="add-todo__btn" onClick={this.handleClick.bind(this)}>
          <i className="fa fa-plus" />
        </button>
      </div>
    );
  }
}
