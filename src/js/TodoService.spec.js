import TodoService from './TodoService';

describe('TodoService', () => {
    let todoService;
  
    beforeAll(() => {
      todoService = new TodoService();
    });
  
    describe('when creating new todo', () => {
        let newCreatedTodo;
        let todoParams;

        beforeAll(() => {
            todoParams = {
                title: 'Test title',
                description: 'Test description',
            };

            newCreatedTodo = todoService.createTodo(todoParams);
        });

        it('"id" should be generated automatically', () => {
            expect(newCreatedTodo.id).toEqual(expect.any(String));
            expect(newCreatedTodo.id).toHaveLength(4);
        });

        it('"title" in a new todo  should be equals to "Test title"', () => {
            expect(newCreatedTodo.title).toBe(todoParams.title)
        })

        it('"description" in a new todo should be equals to "Test description"', () => {
            expect(newCreatedTodo.description).toBe(todoParams.description)
        })
    })

    describe('when updating existing todo', () => {
        let change;
        let oldTodoElem;
        let updatedTodoElem;


        beforeAll (() => {
            oldTodoElem = {
                title: 'Test title',
                description: 'test description',
                like: false,
                comment: 'Test comment',
                isCompleted: false,
            }

            change = {
                title: 'new title',
                description: 'new description',
                like: true,
                comment: 'new comment',
                isCompleted: true,
            } 

            updatedTodoElem = todoService.updateTodo (change, oldTodoElem);
        })

        it('"title" in a updated todo should be equals to "title" in a change', () => {
            expect(updatedTodoElem.title).toBe(change.title)
        })

        it('"description" in a updated todo should be equals to "description" in a change', () => {
            expect(updatedTodoElem.description).toBe(change.description)
        })

        it('"like" in a updated todo should be equals to "like" in a change', () => {
            expect(updatedTodoElem.like).toBe(change.like)
        })

        it('"comment" in a updated todo should be equals to "comment" in a change', () => {
            expect(updatedTodoElem.comment).toBe(change.comment)
        })

        it('"isCompleted" in a updated todo should be equals to "isCompleted" in a change', () => {
            expect(updatedTodoElem.comment).toBe(change.comment)
        })
    })
})  










