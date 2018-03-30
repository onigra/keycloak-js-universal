// @flow

class KcConfig {
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
}

module.exports = KcConfig