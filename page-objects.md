# Page objects

The objective in this chapter is to use e2e best practices to run a big test suite with clean re-usable tests.

- Create two page objects to handle the page and a single todo
- Move functionality out into the page objects and clean up the tests
- Add two more tests that 3.1. check if you can clear completed ToDo's 3.2. check filtering of ToDo's

A full documentation on how page objects can be written with WebdriverIO can be found in the docs. The goal of this excercise is to make your initial test look as follows:

```javascript
const todoPage = require('../pages/main.page')

describe('Todo', () => {
  it('should be able to add a todo item', () => {
    todoPage.open()
    todoPage.addTodo('ToDo #1')
    todoPage.addTodo('ToDo #2')
    todoPage.addTodo('ToDo #3')

    // to see that all ToDos were entered
    browser.pause(2000)

    todoPage.todos[1].complete()

    // to see that ToDo was completed
    browser.pause(2000)

    expect(todoPage.todoCount).to.be.equal('2 items left')
  })

  // here your new tests (see point 3)
})
```