exports.setState = ({ numberOfTodos = 0, completed = false} = {}) => {
  browser.execute((_numberOfTodos, _completed) => {
    const todoItems = [];
    for (let i = 1; i <= _numberOfTodos; i++) {
      todoItems.push({ title: 'todo#' + i, completed: _completed, id: i });
    }
    localStorage.setItem('todos-vanillajs', JSON.stringify(todoItems));
  }, numberOfTodos, completed);
}