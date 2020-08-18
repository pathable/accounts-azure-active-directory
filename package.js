Package.describe({
  summary: 'Login service for Azure Active Directory',
  version: '1.1.0',
  name: 'sornii:accounts-azure-active-directory',
  git: 'https://github.com/Sornii/accounts-azure-active-directory',
});

Package.onUse(api => {
  api.use('accounts-base@1.4.2', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth@1.1.15', ['client', 'server']);
  api.use('sornii:azure-active-directory@1.1.0', ['client', 'server']);

  api.addFiles('azure_ad_login_buttons.css', 'client');

  api.addFiles('azure_ad.js');
});
