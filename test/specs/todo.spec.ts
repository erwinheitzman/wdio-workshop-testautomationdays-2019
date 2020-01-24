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
        // setup 0 todo items
        setState([]);
        todoPage.open();

        // create todo item
        todoPage.createTodo('todo#1');

        // assert the todo count
        expect(todoPage.todos).toHaveLength(1);

        // asserting the text containing the total todo's left
        expect(todoPage.count).toHaveText('1')

        // assert list contains the input item
        expect(firstTodo.self).toBeExisting();
    });

    // #3:
    it('edit todo', () => {
        // setup 1 todo items
        setState([states[0]]);
        todoPage.open();

        // edit the created todo item
        todoPage.editTodo(firstTodo, 'edited todo');

        // assert changed item in text in todo item
        expect(editedTodo.self).toBeExisting();
    });

    // #4:
    it('delete todo', () => {
        // setup 2 todo items
        setState([states[0], states[1]]);
        todoPage.open();

        // delete first todo item
        // forcing here because of mobile not accepting click but touch
        browser.execute(deleteButton => deleteButton.click(), firstTodo.deleteButton);

        // assert 1 item in todo list
        expect(todoPage.todos).toHaveLength(1);

        // assert that the second todo item is still existing
        expect(secondTodo.self).toBeExisting();
    });

    // #5:
    it('complete one todo', () => {
        // setup 2 todo items
        setState([states[0], states[1]]);
        todoPage.open();

        // complete first todo item
        firstTodo.completeToggle.click();

        // assert first todo item has class completed
        expect(firstTodo.self).toHaveAttributeContaining('class', 'completed');
    });

    // #6:
    it('show active/completed todos', () => {
        // setup 2 todo items
        setState([{ ...states[0], completed: true }, states[1]]);
        todoPage.open();

        // when click on show active
        todoPage.filter.active.click();

        // assert todo text equals second input todo item
        expect(secondTodo.self).toBeExisting();

        // when click on show completed
        todoPage.filter.completed.click();

        // assert todo text equals first input todo item
        expect(firstTodo.self).toBeExisting();
    });

    // #7:
    it('complete all todos', () => {
        // setup 4 todo items
        setState([ states[0], states[1], states[2], states[3] ]);
        todoPage.open();

        // complete all todo items
        todoPage.toggleCompleteAll.click();

        // assert 4 todo items completed
        expect(firstTodo.self).toHaveAttributeContaining('class', 'completed');
        expect(secondTodo.self).toHaveAttributeContaining('class', 'completed');
        expect(thirdTodo.self).toHaveAttributeContaining('class', 'completed');
        expect(fourthTodo.self).toHaveAttributeContaining('class', 'completed');
    });

    // #8:
    it('delete all completed todos', () => {
        // setup 4 todo items
        setState([
            { ...states[0], completed: true },
            { ...states[1], completed: true },
            { ...states[2], completed: true },
            { ...states[3], completed: true },
        ]);
        todoPage.open();

        // clear all completed items
        todoPage.clearAllCompleted.click();

        // assert 0 todo items in todo list
        expect(todoPage.todos).toHaveLength(0);
    });

    // #9:
    it('add custom command to the Browser object', () => {
        todoPage.open();

        // add a custom command to the Browser object
        browser.addCommand('removeAsideElement', () => {
            $('aside').waitForExist();
            browser.execute((sideElement) => sideElement.remove(), $('aside'));
            $('aside').waitForExist(undefined, true);
        });

        // use the command
        browser.removeAsideElement();
    });

    // #10:
    it('add custom command to the Element object', () => {
        todoPage.open();

        // add a custom command to the Element object
        browser.addCommand('remove', function (this: WebdriverIO.Element) {
            this.waitForExist();
            browser.execute((elem) => elem.remove(), this);
            this.waitForExist(undefined, true);
        }, true);

        // use the command
        $('aside').remove();
    });
});
