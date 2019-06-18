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
        /**
         * using `addValue`
         */

        this.newTodoInput.addValue(str);

        /**
         * using `keys`
         */

        // this.newTodoInput.click();
        // browser.keys(str);

        /**
         * both options are viable
         */

        browser.keys('Enter');
    }

    editTodo(elem, str) {
        elem.self.doubleClick();

        /**
         * using `addValue`
         */

        browser.execute(i => i.select(), elem.editInput);
        elem.editInput.addValue(str);

        /**
         * using `keys`
         */

        // Array
        //     .from(elem.editInput.getValue())
        //     .forEach(() => {
        //         browser.keys('Backspace');
        //     });
        // browser.keys(str);
        // elem.editInput.waitForExist();

        /**
         * both options are viable
         */

        browser.keys('Enter');
    }

    open() {
        browser.url('examples/vanillajs');
    }
}

module.exports = new TodoPage();
