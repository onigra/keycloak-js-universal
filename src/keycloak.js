// @flow

import KeycloakConfig from './keycloakConfig'
import KeycloakOptions from './keycloakOptions'
import createUUID from './uuid'

export default class Keycloak {
  config: KeycloakConfig
  options: KeycloakOptions

  constructor(config: {
    realm: string,
    url: string,
    clientId: string,
    redirectUri: string,
    scope: string | void,
  }) {
    this.config = new KeycloakConfig(config)
    this.options = new KeycloakOptions()
  }

  createLoginUrl() {
    return (
      this.config.authUrl() +
      '&state=' +
      encodeURIComponent(createUUID()) +
      '&response_mode=' +
      encodeURIComponent(this.options.responseMode) +
      '&response_type=' +
      encodeURIComponent(this.options.responseType)
    )
  }

  createRegisterUrl() {
    return (
      this.config.registrationUrl() +
      '&state=' +
      encodeURIComponent(createUUID()) +
      '&response_mode=' +
      encodeURIComponent(this.options.responseMode) +
      '&response_type=' +
      encodeURIComponent(this.options.responseType)
    )
  }
}
