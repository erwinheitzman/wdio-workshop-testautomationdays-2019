// 1a: create todoPage class and export an instance of it
const TodoComponent = require('../components/todo.component');
const TodoFilterComponent = require('../components/todo-filter.component');

class TodoPage {
    constructor() {
        this.Todo = TodoComponent;
        this.filter = new TodoFilterComponent();
    }

    get toggleCompleteAll() {
        return $('input.toggle-all');
    }

    get clearAllCompleted() {
        return $('button.clear-completed');
    }

    get todos() {
        return $$('ul.todo-list li');
    }

    get newTodoInput() {
        return $('input.new-todo');
    }

    get editInput() {
        return $('input.edit');
    }

    createTodo(str) {
        this.newTodoInput.click();
        browser.keys(str);
        browser.keys('Enter');
    }

    editTodo(elem, str) {
        elem.self.doubleClick();
        Array
            .from(elem.editInput.getValue())
            .forEach(() => {
                browser.keys('Backspace');
            });
        browser.keys(str);
        browser.keys('Enter');
    }

    open() {
        browser.url('examples/vanillajs');
    }
}

module.exports = new TodoPage();
