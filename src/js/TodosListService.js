export default class TodoService {
    constructor (todoService){
        this.todoService = todoService;
    }
    
    addTodoItem (listTodos, {title, description}) {
        const newTodo = this.todoService.createTodo ({title, description})
        return [...listTodos, newTodo];
    }

    findById (id, listTodos){
        const index = listTodos.findIndex((todoElem) => todoElem.id == id);
        if (index == -1){
            throw Error('TODO item not found');
        }
        return index;
    }

    updateTodoElem (listTodos, id, change){
        const index = this.findById(id, listTodos);

        if (index == -1){
            throw Error ('Wrong id');
        }

        listTodos[index] = this.todoService.updateTodo(change, listTodos[index]);
        return [...listTodos];
    }

    removeTodoElem (listTodos, id){
        const index = this.findById(id, listTodos);
        const result = [...listTodos];
        result.splice(index,1); 
        return result;
    }
}