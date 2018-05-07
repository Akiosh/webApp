export default class LocalStorageTodosListDAO {
    listeners = null;
  
    /**
     * @return {TodoObject[]}
     */
    getAllTodos() {
      const todos = JSON.parse(window.localStorage.getItem('todos'));
      return Promise.resolve(todos || []);
    }
  
    /**
     * @param {TodoObject[]} todos
     */
    saveAllTodos(todos) {
      try {
        window.localStorage.setItem('todos', JSON.stringify(todos));
        this.listeners(todos);
      } catch(e) {
        return Promise.reject(e);
      }
  
      return Promise.resolve();
    }

    setListener (setState) {
      this.listeners = setState;
    }
  }