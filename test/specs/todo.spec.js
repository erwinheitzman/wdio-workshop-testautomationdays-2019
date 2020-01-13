const { setState } = require('../utils/state-manager');
const { todoPage } = require('../pages/todo.page');

describe('todo app', () => {
    before(() => {
        todoPage.open();
    });

    // #2:
    it.skip('create todo', () => {
        // setup 0 todo items
        setState({ numberOfTodos: 0, completed: false });
        todoPage.open();

        // create 1 todo item

        // assert 1 item in the todo list

        // assert list contains the input item
    });

    // #3:
    it.skip('edit todo', () => {
        // setup 1 todo item

        // edit the todo item

        // assert that the title of the item has changed
    });

    // #4:
    it.skip('delete todo', () => {
        // setup 2 todo items

        // delete the first todo item

        // assert 1 item in the todo list

        // assert that the second todo item still exists
    });

    // #5:
    it.skip('complete one todo', () => {
        // setup 2 todo items

        // complete the first todo item

        // assert that the first todo item has the class `completed`
    });

    // #6:
    it.skip('show active/completed todos', () => {
        // setup 2 todo items

        // complete the first todo item

        // click on the `active` button

        // assert that the second todo item is shown

        // click on the `completed` button

        // assert that the first todo item is shown
    });

    // #7:
    it.skip('complete all todos', () => {
        // setup 4 todo items

        // click on the `toggle all` button (the downward facing arrow)

        // assert that all todo items are completed
    });

    // #8:
    it.skip('delete all completed todos', () => {
        // setup 4 (completed) todo items

        // click on the `clear completed` button

        // assert that there are no todo items shown
    });

    // #9:
    it.skip('add custom command to the Browser object', () => {
        // add a custom command to the Browser object

        // use the command
    });

    // #10:
    it.skip('add custom command to the Element object', () => {
        // add a custom command to the Element object
    
        // use the command
    });
});
