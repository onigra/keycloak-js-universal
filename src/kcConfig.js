// @flow

class KcConfig {
  realm: string;
  url: string;
  clientId: string;

  constructor(props: { realm: string, url: string, clientId: string }) {
    this.realm = props.realm
    this.url = props.url
    this.clientId = props.clientId
  }
}

module.exports = KcConfig