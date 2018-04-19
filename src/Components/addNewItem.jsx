import React, { Component } from "react";
import style from "../css/add-new-item.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.descriptionInput = React.createRef();
  }

  componentDidMount () {
    this.titleInput.current.value = "Title";
    this.descriptionInput.current.value = "Description";
  }

  handleClick = input => {
    const title = this.titleInput.current.value;
    this.titleInput.current.value = "Title";
    const description = this.descriptionInput.current.value;
    this.descriptionInput.current.value = "Description";
    this.props.onAddingItem({title, description});
  };

  render() {
    return (
      <div className="add-todo">
        <input className="add-todo__input_title" ref={this.titleInput} />
        <textarea className="add-todo__input_description" ref={this.descriptionInput} /> 
        <button className="add-todo__btn" onClick={this.handleClick.bind(this)}>
          <i className="fa fa-plus" />
        </button>
      </div>
    );
  }
}
