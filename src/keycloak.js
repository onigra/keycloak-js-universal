// @flow

import KeyclaokConfig from './keycloakConfig'
import KeyclaokInitOptions from './keycloakInitOptions'

class Keycloak {
  config: KeyclaokConfig
  options: KeyclaokInitOptions

  constructor(config: { realm: string, url: string, clientId: string, redirectUri: string }) {
    this.config = new KeyclaokConfig(config)
    this.options = new KeyclaokInitOptions()
  }

  createLoginUrl() {
    return this.config.authUrl()
  }

  createRegisterUrl() {
    return this.config.registrationUrl()
  }
}

module.exports = Keycloak
