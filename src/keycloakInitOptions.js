// @flow

type ResponseMode = 'query' | 'fragment'
type Flow = 'standard' | 'implicit' | 'hybrid'
type ResponseType = 'code' | 'id_token token' | 'code id_token token'

class KeycloakInitOptions {
  responseMode: ResponseMode
  flow: Flow
  responseType: ResponseType

  static RESPONSE_TYPE = {
    standard: 'code',
    implicit: 'id_token token',
    hybrid: 'code id_token token',
  }

  constructor(options: { responseMode: ResponseMode, flow: Flow }) {
    this.responseMode = options.responseMode
    this.flow = options.flow
    this.responseType = KeycloakInitOptions.RESPONSE_TYPE[options.flow]
  }
}

module.exports = KeycloakInitOptions
