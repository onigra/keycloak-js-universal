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
  }

  createRegisterUrl() {
    return this.config.registrationUrl()
      + '&state=' + encodeURIComponent(createUUID())
  }
}

module.exports = Keycloak
