import React, { Component } from "react";

export class AddComment extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleKeyDown = event => {
    if (event.key == "Enter") {
      const { value } = this.input.current;
      this.input.current.value = "";
      this.props.addComment(value);
      event.preventDefault();
    }
  };

  componentDidMount(props){
    this.input.current.value = this.props.comment;
  }

  render() {
    return (
      <textarea
        className="add-todo__input-comment"
        ref={this.input}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}
