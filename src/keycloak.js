// @flow

import KeycloakConfig from './keycloakConfig'
import KeycloakOptions from './keycloakOptions'
import OidcClient from './oidcClient'
import createUUID from './uuid'

export default class Keycloak {
  config: KeycloakConfig
  options: KeycloakOptions
  oidcClient: OidcClient

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
    this.oidcClient = OidcClient.createClient(this.config, this.options)
  }

  createRegisterUrl() {
    return (
      this.config.registrationUrl() +
      '&state=' +
      encodeURIComponent(createUUID()) +
      '&nonce=' +
      encodeURIComponent(createUUID()) +
      '&response_mode=' +
      encodeURIComponent(this.options.responseMode) +
      '&response_type=' +
      encodeURIComponent(this.options.responseType)
    )
  }
}
