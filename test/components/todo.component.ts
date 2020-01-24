export class TodoComponent {
    constructor(public selector: string) {}

    get self() {
        return $(`li=${this.selector}`);
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
}