module.exports = class TodoFilterComponent {
    get self() {
        return $('ul.filters');
    }

    get all() {
        return this.self.$('=All');
    }

    get active() {
        return this.self.$('=Active');
    }

    get completed() {
        return this.self.$('=Completed');
    }
};