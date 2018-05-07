import sinon from 'sinon';

import TodosListService from './TodosListService';
import TodoService from './TodoService';


describe('TodosListService', () => {
    let todosListService;
    let listTodos ;
    
    beforeEach(() => {
        todosListService = new TodosListService(new TodoService());
        listTodos = [{
            title: 'title',
            description: 'description',
            like: false,
            comment: 'Test comment',
            isCompleted: false,
            id: '2134'
        }]
        //sinon.stub(todoService, 'createTodo')
    });

    describe('when creating new todo', () => {
        let infoForNewTodo;
        let result;
        
        beforeEach(() => {
            infoForNewTodo = {
                title: 'Test title',
                description: 'Test descripton'
            }
            result = todosListService.addTodoItem(listTodos, infoForNewTodo)
        })
        
        it('A new todo item "title" and "description" should to be equal "title" and "description" in a infoForNewTodo', () => {
            expect(result[1]).toEqual(expect.objectContaining(infoForNewTodo));
        });
    })

    describe('when updating todo', () => {
        let infoForUpdatingTodo;
        let result;

        beforeEach(() => {
            infoForUpdatingTodo = {
                title: 'title',
                description: 'description',
                like: false,
                comment: 'Test comment',
                isCompleted: false,
            }
            result = todosListService.updateTodoElem(listTodos,'2134', infoForUpdatingTodo)
        })

        it('Updated todo should to be equal  infoForUpdatingTodo', () => {
            expect(result[0]).toEqual(expect.objectContaining(infoForUpdatingTodo));
        });
    })
})