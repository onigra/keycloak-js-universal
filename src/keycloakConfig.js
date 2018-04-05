// @flow

export default class KeycloakConfig {
  realm: string
  url: string
  clientId: string
  redirectUri: string
  scope: string

  constructor(props: {
    realm: string,
    url: string,
    clientId: string,
    redirectUri: string,
    scope: string | void,
  }) {
    this.realm = props.realm
    this.url = props.url
    this.clientId = props.clientId
    this.redirectUri = props.redirectUri
    this.scope = props.scope ? props.scope : 'openid'
  }

  authUrl() {
    return (
      this.url +
      '/realms/' +
      this.realm +
      '/protocol/openid-connect/auth' +
      '?client_id=' +
      encodeURIComponent(this.clientId) +
      '&redirect_uri=' +
      encodeURIComponent(this.redirectUri) +
      '&scope=' +
      encodeURIComponent(this.scope)
    )
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
      encodeURIComponent(this.redirectUri) +
      '&scope=' +
      encodeURIComponent(this.scope)
    )
  }
}
