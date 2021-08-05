Package.describe({
  summary: 'Login service for Azure Active Directory',
  version: '1.4.0',
  name: 'pathable:accounts-azure-active-directory',
  git: 'https://github.com/pathable/accounts-azure-active-directory',
});

Package.onUse(api => {
  api.versionsFrom('2.3.4');

  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('pathable:azure-active-directory@1.4.0', ['client', 'server']);

  api.addFiles('azure_ad_login_buttons.css', 'client');

  api.addFiles('azure_ad.js');
});
