// #1b: import the page object class instance

describe('todo app', () => {
    before(() => {
        // #2: add navigation to 'http://todomvc.com/examples/vanillajs/'
    });
    beforeEach(() => {
        // #3: use the `execute` command to clear the localStorage and then refresh the page
    });

    // #4:
    it.skip('create todo', () => {
        // create todo item

        // assert 1 item in list

        // assert list contains the input item
    });

    // #5:
    it.skip('edit todo', () => {
        // create a todo item

        // edit the created todo item

        // // assert changed item in text in todo item
    });

    // #6:
    it.skip('delete todo', () => {
        // create 2 todo items

        // delete first todo item

        // assert 1 item in todo list

        // assert todo text equals second input todo item
    });

    // #7:
    it.skip('complete one todo', () => {
        // create 2 todo items

        // complete first todo item

        // assert first todo item has class completed
    });

    // #8:
    it.skip('show active/completed todos', () => {
        // create 2 todo items

        // complete first todo item

        // when click on show active

        // assert todo text equals second input todo item

        // when click on show completed

        // assert todo text equals first input todo item
    });

    // #9:
    it.skip('complete all todos', () => {
        // create 4 todo items

        // complete all todo items

        // assert 4 todo items completed
    });

    // #10:
    it.skip('delete all completed todos', () => {
        // create 4 todo items

        // complete all todo items

        // delete all completed items

        // assert 0 todo items in todo list
    });

    // #11:
    it.skip('add custom command to the Browser object', () => {
        // add a custom command to the Browser object

        // use the command
    });

    // #12:
    it.skip('add custom command to the Element object', () => {
        // add a custom command to the Element object
    
        // use the command
    });
});