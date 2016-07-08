export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia KendoUI';
    config.map([
      { route: ['', 'welcome'],   name: 'welcome',      moduleId: 'welcome',                              nav: true, title: 'Welcome' },
      { route: 'k-autocomplete',  name: 'k-button',     moduleId: 'kendoui/autocomplete/k-autocomplete',  nav: true, title: 'KendoUI autocomplete' },
      { route: 'k-button',        name: 'k-button',     moduleId: 'kendoui/button/k-button',              nav: true, title: 'KendoUI button' },
      { route: 'k-toolbar',       name: 'k-toolbar',    moduleId: 'kendoui/toolbar/k-toolbar',            nav: true, title: 'KendoUI toolbar' },
      { route: 'k-treeview',      name: 'k-treeview',   moduleId: 'kendoui/treeview/k-treeview',          nav: true, title: 'KendoUI treeview' }
    ]);

    this.router = router;
  }
}
