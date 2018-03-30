// @flow

type ResponseMode = 'query' | 'fragment'
type Flow = 'standard' | 'implicit' | 'hybrid'

class KeycloakInitOptions {
  responseMode: ResponseMode
  flow: Flow

  constructor(options: { responseMode: ResponseMode, flow: Flow }) {
    this.responseMode = options.responseMode
    this.flow = options.flow
  }
}

module.exports = KeycloakInitOptions
