module.exports = class TodoComponent {
    constructor(selector) {
        this.selector = selector;
    }

    get self() {
        return $('ul.todo-list')
            .$(`li=${this.selector}`);
    }

    get completeToggle() {
        return this.self.$('input.toggle');
    }

    get editInput() {
        return this.self.$('input.edit');
    }

    get deleteButton() {
        return this.self.$('button.destroy');
    }

    isCompleted() {
        return this.self
            .getAttribute('class')
            .includes('completed');
    }
}