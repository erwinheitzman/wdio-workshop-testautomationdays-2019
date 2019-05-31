module.exports = class TodoComponent {
    constructor(selector) {
        this.selector = selector;
    }

    get self() {
        return $('ul.todo-list')
            .$(`li=${this.selector}`);
    }

    get completeToggle() {
        return $('input.toggle');
    }

    get editInput() {
        return $('input.edit');
    }

    get deleteButton() {
        return $('button.destroy');
    }

    isCompleted() {
        return this.self
            .getAttribute('class')
            .includes('completed');
    }
}