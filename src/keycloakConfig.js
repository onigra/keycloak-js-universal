// @flow

class KeycloakConfig {
  realm: string;
  url: string;
  clientId: string;
  redirectUri: string

  constructor(props: { realm: string, url: string, clientId: string, redirectUri: string }) {
    this.realm = props.realm
    this.url = props.url
    this.clientId = props.clientId
    this.redirectUri = props.redirectUri
  }

  authUrl() {
    return this.url
      + '/realms/' + this.realm
      + '/protocol/openid-connect/auth'
      + '?client_id=' + encodeURIComponent(this.clientId)
      + '&redirect_uri=' + encodeURIComponent(this.redirectUri)
  }

  registrationUrl() {
    return this.url
      + '/realms/' + this.realm
      + '/protocol/openid-connect/registrations'
      + '?client_id=' + encodeURIComponent(this.clientId)
      + '&redirect_uri=' + encodeURIComponent(this.redirectUri)
  }
}

module.exports = KeycloakConfig
