class TodoPage {

  // #1
  open() {
    // the baseUrl already points to http://todomvc.com/
    // but we need to navigate to http://todomvc.com/examples/vanillajs/
    // complete the method so that it navigates to the full url
    // tip: read the comments above the baseUrl property found in your wdio.conf.js
    browser.url('examples/vanillajs/')
  }

}

exports.todoPage = new TodoPage();
