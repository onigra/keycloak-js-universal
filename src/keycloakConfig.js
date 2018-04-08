// @flow

export default class KeycloakConfig {
  realm: string
  url: string
  clientId: string
  loginRedirectUri: string
  logoutRedirectUri: string
  signupRedirectUri: string
  scope: string

  constructor(props: {
    realm: string,
    url: string,
    clientId: string,
    loginRedirectUri: string,
    logoutRedirectUri: string,
    signupRedirectUri: string,
    scope: string | void,
  }) {
    this.realm = props.realm
    this.url = props.url
    this.clientId = props.clientId
    this.loginRedirectUri = props.loginRedirectUri
    this.logoutRedirectUri = props.logoutRedirectUri
    this.signupRedirectUri = props.signupRedirectUri
    this.scope = props.scope ? props.scope : 'openid'
  }

  registrationUrl() {
    return (
      this.url +
      '/realms/' +
      this.realm +
      '/protocol/openid-connect/registrations' +
      '?client_id=' +
      encodeURIComponent(this.clientId) +
      '&redirect_uri=' +
      encodeURIComponent(this.signupRedirectUri) +
      '&scope=' +
      encodeURIComponent(this.scope)
    )
  }
}
