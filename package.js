Package.describe({
  summary: "[egaragiste] Notifications de l'application suite aux actions de l'utilisateur"
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
  api.use('egaragiste-notifications');
});
