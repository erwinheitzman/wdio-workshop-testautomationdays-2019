import { todoPage } from '../pages/todo.page';
import { setState, states } from '../utils/state-manager';

const firstTodo = new todoPage.Todo('todo#1');
const secondTodo = new todoPage.Todo('todo#2');
const thirdTodo = new todoPage.Todo('todo#3');
const fourthTodo = new todoPage.Todo('todo#4');
const editedTodo = new todoPage.Todo('edited todo');

describe('todo app', () => {
    before(() => {
        todoPage.open();
    });

    // #2:
    it('create todo', () => {
        // setup 0 todo items and navigate to the page
        setState([]);
        todoPage.open();

        // create todo item
        todoPage.createTodo('todo#1');

        // assert that there is only one item in the todo list

        // NOTE: either of the following examples can be used
        expect(todoPage.todos).toHaveLength(1);
        expect(todoPage.count).toHaveText('1')

        // assert that the list contains the created item
        expect(firstTodo.self).toBeExisting();
    });

    // #3:
    it('edit todo', () => {
        // setup 1 todo items and navigate to the page
        setState([states[0]]);
        todoPage.open();

        // edit the todo item
        todoPage.editTodo(firstTodo, 'edited todo');

        // assert that the title of the item has changed
        expect(editedTodo.self).toBeExisting();
    });

    // #4:
    it('delete todo', () => {
        // setup 2 todo items and navigate to the page
        setState([states[0], states[1]]);
        todoPage.open();

        // delete the first todo item

        // NOTE: forcing here because of mobile not accepting click but touch
        browser.execute(deleteButton => deleteButton.click(), firstTodo.deleteButton);

        // assert that there is only one item in the todo list
        expect(todoPage.todos).toHaveLength(1);

        // assert that the second todo item still exists
        expect(secondTodo.self).toBeExisting();
    });

    // #5:
    it('complete one todo', () => {
        // setup 2 todo items and navigate to the page
        setState([states[0], states[1]]);
        todoPage.open();

        // complete the first todo item
        firstTodo.completeToggle.click();

        // assert that the first todo item has the class `completed`
        expect(firstTodo.self).toHaveAttributeContaining('class', 'completed');
    });

    // #6:
    it('show active/completed todos', () => {
        // setup 2 (one completed and one uncompleted) todo items and navigate to the page
        setState([{ ...states[0], completed: true }, states[1]]);
        todoPage.open();

        // click on the `active` button
        todoPage.filter.active.click();

        // assert that the second todo item is shown
        expect(secondTodo.self).toBeExisting();

        // click on the `completed` button
        todoPage.filter.completed.click();

        // assert that the first todo item is shown
        expect(firstTodo.self).toBeExisting();
    });

    // #7:
    it('complete all todos', () => {
        // setup 4 todo items and navigate to the page
        setState([ states[0], states[1], states[2], states[3] ]);
        todoPage.open();

        // click on the `toggle all` button (the downward facing arrow)
        todoPage.toggleCompleteAll.click();

        // assert that all todo items are completed
        expect(firstTodo.self).toHaveAttributeContaining('class', 'completed');
        expect(secondTodo.self).toHaveAttributeContaining('class', 'completed');
        expect(thirdTodo.self).toHaveAttributeContaining('class', 'completed');
        expect(fourthTodo.self).toHaveAttributeContaining('class', 'completed');
    });

    // #8:
    it('delete all completed todos', () => {
        // setup 4 (completed) todo items and navigate to the page
        setState([
            { ...states[0], completed: true },
            { ...states[1], completed: true },
            { ...states[2], completed: true },
            { ...states[3], completed: true },
        ]);
        todoPage.open();

        // click on the `clear completed` button
        todoPage.clearAllCompleted.click();

        // assert that there are no todo items shown
        expect(todoPage.todos).toHaveLength(0);
    });

    // #9:
    it('add custom command to the Browser object', () => {
        // navigate to the page
        todoPage.open();

        // add a custom command to the Browser object
        browser.addCommand('removeAsideElement', () => {
            $('aside').waitForExist();
            browser.execute((sideElement) => sideElement.remove(), $('aside'));
            $('aside').waitForExist(undefined, true);
        });

        // execute the command
        browser.removeAsideElement();
    });

    // #10:
    it('add custom command to the Element object', () => {
        // navigate to the page
        todoPage.open();

        // add a custom command to the Element object
        browser.addCommand('remove', function (this: WebdriverIO.Element) {
            this.waitForExist();
            browser.execute((elem) => elem.remove(), this);
            this.waitForExist(undefined, true);
        }, true);

        // execute the command
        $('aside').remove();
    });
});
