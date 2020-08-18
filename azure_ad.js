Accounts.oauth.registerService('azureAd');

if (Meteor.isClient) {
  Meteor.loginWithAzureAd = (options, callback) => {
    // support a callback without options
    let _callback;
    let _options;

    if (!callback && typeof options === 'function') {
      _callback = options;
      _options = null;
    }

    // eslint-disable-next-line max-len
    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(
      _callback
    );
    AzureAd.requestCredential(_options, credentialRequestCompleteCallback);
  };
} else {
  const fieldsForLoggedInusers = AzureAd.allowlistFields
    .concat(['accessToken', 'expiresAt'])
    .map(subfield => `services.azureAd.${subfield}`);
  const fieldsForOtherUsers = AzureAd.allowlistFields
    .filter(
      allowlistField => !['mail', 'userPrincipalName'].includes(allowlistField)
    )
    .map(subfield => `services.azureAd.${subfield}`);

  Accounts.addAutopublishFields({
    forLoggedInUser: fieldsForLoggedInusers,
    forOtherUsers: fieldsForOtherUsers,
  });
}
