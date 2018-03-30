// @flow

type ResponseMode = 'query' | 'fragment'

class KeycloakInitOptions {
  responseMode: ResponseMode

  constructor(options: { responseMode: ResponseMode }) {
    this.responseMode = options.responseMode
  }
}

module.exports = KeycloakInitOptions
