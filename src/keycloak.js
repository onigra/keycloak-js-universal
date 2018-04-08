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
    loginRedirectUri: string,
    logoutRedirectUri: string,
    signupRedirectUri: string,
    scope: string | void,
  }) {
    this.config = new KeycloakConfig(config)
    this.options = new KeycloakOptions()
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
