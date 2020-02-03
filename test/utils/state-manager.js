exports.states = [
  { title: 'todo#1', completed: false, id: 1 },
  { title: 'todo#2', completed: false, id: 2 },
  { title: 'todo#3', completed: false, id: 3 },
  { title: 'todo#4', completed: false, id: 4 },
];

exports.setState = (items) => {
    browser.execute((items) => {
        localStorage.setItem('todos-vanillajs', JSON.stringify(items));
    }, items);
}