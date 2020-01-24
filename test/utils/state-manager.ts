interface Item {
  title: string;
  completed: boolean;
  id: number;
}

export const states = [
  { title: 'todo#1', completed: false, id: 1 },
  { title: 'todo#2', completed: false, id: 2 },
  { title: 'todo#3', completed: false, id: 3 },
  { title: 'todo#4', completed: false, id: 4 },
];

export const setState = (items: Array<Item>) => {
    browser.execute((items) => {
        localStorage.setItem('todos-vanillajs', JSON.stringify(items));
    }, items);
}