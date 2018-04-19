import React, { Component } from "react";
import style from "../css/item.css"
import { AddComment } from "./addComment.jsx";



export class Item extends Component {
    constructor (props){
        super (props);
        this.titleInput = React.createRef();
        this.descriptionInput = React.createRef();
        this.state = {
            isCommenting : false,
            hasComment: this.props.comment ? true : false,
            completed: false,
            isEdit: false
        }
    }

    onAddingComment (comment) {
        this.props.onAddingComment(this.props.id, comment);
        this.setState({hasComment: true});
    }

    onClickComment (){
        this.setState ({
            isCommenting: !this.state.isCommenting
        });
    }

    onClickComleted(){
        this.setState({
            comleted: !this.state.comleted,
        });
    }

    onClickEdit(){
        if (this.state.isEdit == true){
            const title = this.titleInput.current.value;
            const description = this.descriptionInput.current.value;
            this.props.onEditItem(this.props.id,{title,description})
        }
        this.setState({
            isEdit: !this.state.isEdit,
        });
    }
    
    render () {
        const {
            id,
            title,
            description,
            isLiked,
            completed,
            onClickLike,
            onAddingComment
        } = this.props;
        console.log(title + "   " + description + " ");
        return(
            <li className = {"todo " + (this.state.comleted ? "opacity" : "")}>
            {this.state.isEdit    
                ?<div className = "edit-todo">
                    <input className="edit-todo__input_title" ref={this.titleInput} defaultValue = {title}/>
                    <textarea className="edit-todo__input_description" ref={this.descriptionInput}  defaultValue = {description}/>
                </div>
                :<div className = "todo-data">
                    <span className = "todo-data_title">{title}</span>
                    <span className="todo-data_description">{description}</span>
                </div> 
            }
                <span>{this.state.hasComment && ("Comment: " + this.props.comment)}</span>
                <div>
                    <i onClick = {!this.state.comleted && (() => onClickLike(id, !isLiked))}
                    className={"fa fa-heart " + (isLiked ? "red " : "") + (this.state.comleted ? "more-opacity " : "")}
                    />
                    <i onClick = {!this.state.comleted && (() => this.onClickComment())}
                    className={"fa fa-plus " + (this.state.isCommenting ? "red " : "") + (this.state.comleted ? "more-opacity " : "")}
                    />
                    {this.state.comleted 
                        ?<i onClick = {!this.state.isCommenting && !this.state.isEdit && (() => this.onClickComleted())}
                        className={"fa fa-check green " }
                        />
                        : <i onClick = {!this.state.isCommenting && !this.state.isEdit && (() => this.onClickComleted())} 
                        className={"fa fa-times red "}/>
                    }
                    <i onClick = {!this.state.comleted && (() => this.onClickEdit())}
                        className={"fa fa-edit " + (this.state.isEdit ? "green " : "") + (this.state.comleted ? "more-opacity " : "")}
                    />
                </div>
                {this.state.isCommenting && <AddComment addComment = {this.onAddingComment.bind(this)} />}
            </li>
        );
    }
}