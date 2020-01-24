// 1a: create todoPage class and export an instance of it
import { TodoComponent } from '../components/todo.component';
import { TodoFilterComponent } from '../components/todo-filter.component';

class TodoPage {
    public Todo = TodoComponent;
    public filter = new TodoFilterComponent();

    constructor() {}

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

    get count() {
        return $('.todo-count strong');
    }

    createTodo(str: string) {
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

    editTodo(elem: TodoComponent, str: string) {
        elem.self.doubleClick();

        /**
         * using `execute`
         */
        elem.editInput.waitForExist();
        browser.execute((i, s) => {
            i.value = s;
            i.blur();
        }, elem.editInput, str);

        /**
         * using `addValue`
         */
        // elem.editInput.waitForExist();
        // browser.execute(i => i.select(), elem.editInput);
        // elem.editInput.addValue(str);

        /**
         * using `keys`
         */
        // Array
        //     .from(elem.editInput.getValue())
        //     .forEach(() => {
        //         browser.keys('Backspace');
        //     });
        // browser.keys(str);

        // browser.keys('Enter');
    }

    open() {
        browser.url('examples/vanillajs');
    }
}

export const todoPage = new TodoPage();
