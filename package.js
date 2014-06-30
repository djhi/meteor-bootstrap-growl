Package.describe({
  summary: "Provides growl notifications through a NotificationHelper utility class on client"
});

Package.on_use(function (api, where) {
  var both = ['client', 'server'];

  api.use('standard-app-packages', both);
  api.use('bootstrap-growl', 'client');
  api.imply('bootstrap-growl', 'client');

  api.add_files('lib.js', 'client');

  api.export('NotificationsHelper', 'client');
});

Package.on_test(function (api) {
  api.use('meteor-bootstrap-growl');
});
