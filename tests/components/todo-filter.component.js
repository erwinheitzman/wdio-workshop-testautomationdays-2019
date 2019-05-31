module.exports = class TodoFilterComponent {
    get self() {
        return $('ul.filters');
    }

    get all() {
        return $('=All');
    }

    get active() {
        return $('=Active');
    }

    get completed() {
        return $('=Completed');
    }
};