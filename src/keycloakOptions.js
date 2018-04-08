// @flow

type ResponseMode = 'query' | 'fragment'
type Flow = 'standard' | 'implicit' | 'hybrid'
type ResponseType = 'code' | 'id_token token' | 'code id_token token'
type OnLoad = 'login-required' | 'check-sso'

export default class KeycloakOptions {
  responseMode: ResponseMode
  flow: Flow
  responseType: ResponseType
  onLoad: OnLoad

  static RESPONSE_TYPE = {
    standard: 'code',
    implicit: 'id_token token',
    hybrid: 'code id_token token',
  }

  constructor(
    options: {
      responseMode: ResponseMode,
      flow: Flow,
      onLoad: OnLoad,
    } = {
      responseMode: 'fragment',
      flow: 'standard',
      onLoad: 'check-sso',
    },
  ) {
    this.responseMode = options.responseMode
    this.flow = options.flow
    this.responseType = KeycloakOptions.RESPONSE_TYPE[options.flow]
    this.onLoad = options.onLoad
  }
}
