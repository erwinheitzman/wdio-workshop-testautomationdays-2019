const { todoPage } = require('../pages/todo.page');
const { setState, states } = require('../utils/state-manager');

describe('todo app', () => {
    before(() => {
        todoPage.open();
    });

    // #2:
    it.skip('create todo', () => {
        // setup 0 todo items and navigate to the page
        setState([]);
        todoPage.open();

        // create a todo item

        // assert that there is only one item in the todo list

        // assert that the list contains the created item
    });

    // #3:
    it.skip('edit todo', () => {
        // setup 1 todo items and navigate to the page
        setState([states[0]]);
        todoPage.open();

        // edit the todo item

        // assert that the title of the item has changed
    });

    // #4:
    it.skip('delete todo', () => {
        // setup 2 todo items and navigate to the page

        // delete the first todo item

        // assert that there is only one item in the todo list

        // assert that the second todo item still exists
    });

    // #5:
    it.skip('complete one todo', () => {
        // setup 2 todo items and navigate to the page

        // complete the first todo item

        // assert that the first todo item has the class `completed`
    });

    // #6:
    it.skip('show active/completed todos', () => {
        // setup 2 (one completed and one uncompleted) todo items and navigate to the page
        setState([{ ...states[0], completed: true }, states[1]]);
        todoPage.open();

        // click on the `active` button

        // assert that the second todo item is shown

        // click on the `completed` button

        // assert that the first todo item is shown
    });

    // #7:
    it.skip('complete all todos', () => {
        // setup 4 todo items and navigate to the page

        // click on the `toggle all` button (the downward facing arrow)

        // assert that all todo items are completed
    });

    // #8:
    it.skip('delete all completed todos', () => {
        // setup 4 (completed) todo items and navigate to the page

        // click on the `clear completed` button

        // assert that there are no todo items shown
    });

    // #9:
    it.skip('add custom command to the Browser object', () => {
        // navigate to the page

        // add a custom command to the Browser object

        // execute the command
    });

    // #10:
    it.skip('add custom command to the Element object', () => {
        // navigate to the page

        // add a custom command to the Element object
    
        // execute the command
    });
});
