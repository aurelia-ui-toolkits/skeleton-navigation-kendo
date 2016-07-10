export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia KendoUI-pro';
    config.map([
      { route: ['', 'welcome'],   name: 'welcome',      moduleId: 'welcome',                              nav: true, title: 'Welcome' },
      { route: 'k-chart',         name: 'k-chart',      moduleId: 'kendoui/chart/k-chart',                nav: true, title: 'KendoUI chart' },
      { route: 'k-grid',          name: 'k-grid',       moduleId: 'kendoui/grid/k-grid',                  nav: true, title: 'KendoUI grid' },
      { route: 'k-scheduler',     name: 'k-scheduler',  moduleId: 'kendoui/scheduler/k-scheduler',        nav: true, title: 'KendoUI scheduler' },
      { route: 'k-treeview',      name: 'k-treeview',   moduleId: 'kendoui/treeview/k-treeview',          nav: true, title: 'KendoUI treeview' }
    ]);

    this.router = router;
  }
}
