function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4();
  }

const showIDItem = function (item){
    item.id 
    ? console.log("ID: " + item.id)
    : console.log("ID: " + item);
    return item;
}

function addTodoItem (listTodos, {title, description}) {
    const id = guid();
    showIDItem(id);
    return [...listTodos, {
        "id" : id,
        "title" : title,
        "description" : description,
    }];
};

const findById = function (id, listTodos){
    const index = listTodos.findIndex((todoElem) => todoElem.id == id);
    if (index == -1){
        throw Error("TODO item not found");
    }
    return index;
};

const updateTodoElem = function (listTodos, id, change){
    const index = findById(id, listTodos);

    if (index == -1){
        throw Error ("Wrong id");
    }

    listTodos[index] = {
        ...listTodos[index],
        ...change
    };

    showIDItem(listTodos[index]);

    return [...listTodos];
};

const removeTodoElem = function (listTodos, id){
    const index = findById(id, listTodos);
    const result = [...listTodos];
    result.splice(index,1); 
    return result;
}

module.exports = {addTodoItem, updateTodoElem, removeTodoElem}