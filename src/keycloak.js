// @flow

import KeyclaokConfig from './keycloakConfig'
import KeyclaokInitOptions from './keycloakInitOptions'
import createUUID from './uuid'

class Keycloak {
  config: KeyclaokConfig
  options: KeyclaokInitOptions

  constructor(config: { realm: string, url: string, clientId: string, redirectUri: string }) {
    this.config = new KeyclaokConfig(config)
    this.options = new KeyclaokInitOptions()
  }

  createLoginUrl() {
    return this.config.authUrl()
      + '&state=' + encodeURIComponent(createUUID())
      + '&response_mode=' + encodeURIComponent(this.options.responseMode)
      + '&response_type=' + encodeURIComponent(this.options.responseType)
  }

  createRegisterUrl() {
    return this.config.registrationUrl()
      + '&state=' + encodeURIComponent(createUUID())
      + '&response_mode=' + encodeURIComponent(this.options.responseMode)
      + '&response_type=' + encodeURIComponent(this.options.responseType)
  }
}

module.exports = Keycloak
