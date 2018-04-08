// @flow

import type { ResponseMode, Flow, ResponseType } from './optionTypes'

export default class KeycloakOptions {
  responseMode: ResponseMode
  flow: Flow
  responseType: ResponseType

  static RESPONSE_TYPE = {
    standard: 'code',
    implicit: 'id_token token',
    hybrid: 'code id_token token',
  }

  constructor(
    options: {
      responseMode: ResponseMode,
      flow: Flow,
    } = {
      responseMode: 'fragment',
      flow: 'implicit',
    },
  ) {
    this.responseMode = options.responseMode ? options.responseMode : 'fragment'
    this.flow = options.flow ? options.flow : 'implicit'
    this.responseType = options.flow
      ? KeycloakOptions.RESPONSE_TYPE[options.flow]
      : KeycloakOptions.RESPONSE_TYPE['implicit']
  }
}
