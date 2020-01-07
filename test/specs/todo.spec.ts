// #1b: import the page object class instance
import { todoPage } from '../pages/todo.page';

const firstTodo = new todoPage.Todo('first todo');
const secondTodo = new todoPage.Todo('second todo');
const thirdTodo = new todoPage.Todo('third todo');
const fourthTodo = new todoPage.Todo('fourth todo');
const editedTodo = new todoPage.Todo('edited todo');

const firstTodoState = { title: 'first todo', completed: false, id: 1 };
const secondTodoState = { title: 'second todo', completed: false, id: 2 };
const thirdTodoState = { title: 'third todo', completed: false, id: 3 };
const fourthTodoState = { title: 'fourth todo', completed: false, id: 4 };

function createTodoItems(items: Array<{ title: string; completed: boolean, id: number }>) {
    browser.execute((items) => {
        localStorage.setItem('todos-vanillajs', JSON.stringify(items));
    }, items);
}

describe('todo app', () => {
    before(() => {
        // #2: add navigation to http://todomvc.com/examples/vanillajs/
        todoPage.open();
    });

    // #4:
    it('create todo', () => {
        // setup 0 todo items
        createTodoItems([]);
        todoPage.open();

        // create todo item
        todoPage.createTodo('first todo');

        //assert the todo count
        expect(todoPage.todos.length).toEqual(1);

        // asserting the text containing the total todo's left
        expect(todoPage.count.getText()).toEqual('1');

        // assert list contains the input item
        expect(firstTodo.self.isExisting()).toBeTruthy();
    });

    // #5:
    it('edit todo', () => {
        // setup 1 todo items
        createTodoItems([firstTodoState]);
        todoPage.open();

        // edit the created todo item
        todoPage.editTodo(firstTodo, 'edited todo');

        // assert changed item in text in todo item
        expect(editedTodo.self.isExisting()).toBeTruthy();
    });

    // #6:
    it('delete todo', () => {
        // setup 2 todo items
        createTodoItems([firstTodoState, secondTodoState]);
        todoPage.open();

        // delete first todo item
        // forcing here because of mobile not accepting click but touch
        browser.execute(deleteButton => deleteButton.click(), firstTodo.deleteButton);

        // assert 1 item in todo list
        expect(todoPage.todos.length).toEqual(1);

        // assert todo text equals second input todo item
        expect(secondTodo.self.isExisting()).toBeTruthy();
    });

    // #7:
    it('complete one todo', () => {
        // setup 2 todo items
        createTodoItems([firstTodoState, secondTodoState]);
        todoPage.open();

        // complete first todo item
        firstTodo.completeToggle.click();

        // assert first todo item has class completed
        expect(firstTodo.isCompleted()).toBeTruthy();
    });

    // #8:
    it('show active/completed todos', () => {
        // setup 2 todo items
        createTodoItems([firstTodoState, secondTodoState]);
        todoPage.open();

        // complete first todo item
        firstTodo.completeToggle.click();

        // when click on show active
        todoPage.filter.active.click();

        // assert todo text equals second input todo item
        expect(secondTodo.self.isExisting()).toBeTruthy();

        // when click on show completed
        todoPage.filter.completed.click();

        // assert todo text equals first input todo item
        expect(firstTodo.self.isExisting()).toBeTruthy();
    });

    // #9:
    it('complete all todos', () => {
        // setup 4 todo items
        createTodoItems([
            firstTodoState,
            secondTodoState,
            thirdTodoState,
            fourthTodoState,
        ]);
        todoPage.open();

        // complete all todo items
        todoPage.toggleCompleteAll.click();

        // assert 4 todo items completed
        expect(firstTodo.isCompleted()).toBeTruthy();
        expect(secondTodo.isCompleted()).toBeTruthy();
        expect(thirdTodo.isCompleted()).toBeTruthy();
        expect(fourthTodo.isCompleted()).toBeTruthy();
    });

    // #10:
    it('delete all completed todos', () => {
        // setup 4 todo items
        createTodoItems([
            firstTodoState,
            secondTodoState,
            thirdTodoState,
            fourthTodoState,
        ]);
        todoPage.open();

        // complete all todo items
        todoPage.toggleCompleteAll.click();

        // delete all completed items
        todoPage.clearAllCompleted.click();

        // assert 0 todo items in todo list
        expect(todoPage.todos.length).toEqual(0);
    });

    // #11:
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

    // #12:
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
