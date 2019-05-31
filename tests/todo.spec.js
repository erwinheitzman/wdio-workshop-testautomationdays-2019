// #1: import the todoPage class instance
const todoPage = require('./pages/todo.page');

describe('todo app', () => {
    before(() => {
        // #2: add navigation to 'http://todomvc.com/examples/vanillajs/'
        browser.url('http://todomvc.com/examples/vanillajs/');
    })

    // #3:
    it.skip('create todo', () => {
        const firstTodo = new todoPage.Todo('first todo');

        // create todo item
        todoPage.createTodo('first todo');

        // assert 1 item in list
        browser.waitUntil(() => todoPage.todos.length === 1);

        // assert list contains the input item
        firstTodo.self.waitForExist();

    });

    // #4:
    it.skip('edit todo', () => {
        const firstTodo = new todoPage.Todo('first todo');
        const editedTodo = new todoPage.Todo('edited todo');

        // create a todo item
        todoPage.createTodo('first todo');

        // edit the created todo item
        todoPage.editTodo(firstTodo, 'edited todo');

        // assert changed item in text in todo item
        editedTodo.self.waitForExist();
    });

    // #5:
    it.skip('delete todo', () => {
        const firstTodo = new todoPage.Todo('first todo');
        const secondTodo = new todoPage.Todo('second todo');

        // create 2 todo items
        todoPage.createTodo('first todo');
        todoPage.createTodo('second todo');

        // delete first todo item
        firstTodo.self.moveTo();
        firstTodo.deleteButton.click();

        // assert 1 item in todo list
        browser.waitUntil(() => todoPage.todos.length === 1);

        // assert todo text equals second input todo item
        secondTodo.self.waitForExist();
    });

    // #6:
    it.skip('complete one todo', () => {
        const firstTodo = new todoPage.Todo('first todo');

        // create 2 todo items
        todoPage.createTodo('first todo');
        todoPage.createTodo('second todo');

        // complete first todo item
        firstTodo.completeToggle.click();

        // assert first todo item has class completed
        browser.waitUntil(() => firstTodo.isCompleted());
    });

    // #7:
    it.skip('show active/completed todos', () => {
        const firstTodo = new todoPage.Todo('first todo');
        const secondTodo = new todoPage.Todo('second todo');

        // create 2 todo items
        todoPage.createTodo('first todo');
        todoPage.createTodo('second todo');

        // complete first todo item
        firstTodo.completeToggle.click();

        // when click on show active
        todoPage.filter.active.click();

        // assert todo text equals second input todo item
        secondTodo.self.waitForExist();

        // when click on show completed
        todoPage.filter.completed.click();

        // assert todo text equals first input todo item
        firstTodo.self.waitForExist();
    });

    // #8:
    it.skip('complete all todos', () => {
        const firstTodo = new todoPage.Todo('first todo');
        const secondTodo = new todoPage.Todo('second todo');
        const thirdTodo = new todoPage.Todo('third todo');
        const fourthTodo = new todoPage.Todo('fourth todo');

        // create 4 todo items
        todoPage.createTodo('first todo');
        todoPage.createTodo('second todo');
        todoPage.createTodo('third todo');
        todoPage.createTodo('fourth todo');

        // complete all todo items
        todoPage.toggleCompleteAll.click();

        // assert 4 todo items completed
        browser.waitUntil(() => firstTodo.isCompleted());
        browser.waitUntil(() => secondTodo.isCompleted());
        browser.waitUntil(() => thirdTodo.isCompleted());
        browser.waitUntil(() => fourthTodo.isCompleted());
    });

    // #9:
    it.skip('delete all completed todos', () => {
        const firstTodo = new todoPage.Todo('first todo');
        const secondTodo = new todoPage.Todo('second todo');
        const thirdTodo = new todoPage.Todo('third todo');
        const fourthTodo = new todoPage.Todo('fourth todo');

        // create 4 todo items
        todoPage.createTodo('first todo');
        todoPage.createTodo('second todo');
        todoPage.createTodo('third todo');
        todoPage.createTodo('fourth todo');

        // complete all todo items
        todoPage.toggleCompleteAll.click();

        // delete all completed items
        todoPage.clearAllCompleted.click();

        // assert 0 todo items in todo list
        browser.waitUntil(() => todoPage.todos.length === 0);
    });

    // #10:
    it.skip('remove aside element from DOM', () => {
        $('aside').waitForExist();

        browser.execute((sideElement) => sideElement.remove(), $('aside'));

        $('aside').waitForExist(null, true);
    });

    // #11:
    it('add custom command to the Browser object', () => {
        browser.addCommand('removeAsideElement', function() {
            $('aside').waitForExist();
            browser.execute((sideElement) => sideElement.remove(), $('aside'));
            $('aside').waitForExist(null, true);
        });

        browser.removeAsideElement();
    });

    // #12:
    it('add custom command to the Element object', () => {
        browser.addCommand('removeAsideElement', function() {
            this.waitForExist();
            browser.execute((sideElement) => sideElement.remove(), this);
            this.waitForExist(null, true);
        }, true);
    
        $('aside').removeAsideElement();
    });
});