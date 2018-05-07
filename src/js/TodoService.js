export default class TodoService {
    _guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4();
      }
  
    createTodo({title, description}) {
        return {
        id: this. _guid(),
        title: title,
        description: description,
        };
    }

    updateTodo(change, todo) {
        return {
        ...todo,
        ...change,
        };
    }
}