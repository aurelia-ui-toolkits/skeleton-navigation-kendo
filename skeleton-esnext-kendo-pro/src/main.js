import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-kendoui-bridge', (kendo) => kendo.pro());

  aurelia.start().then(() => aurelia.setRoot());
}
