import KeycloakInitOptions from '~/src/keycloakInitOptions'
import assert from 'assert'

describe('KeycloakInitOptions', () => {
  test('flow is standard', () => {
    const options = {
      responseMode: 'fragment',
      flow: 'standard',
      onLoad: 'login-required',
    }
    const initOptions = new KeycloakInitOptions(options)

    assert(initOptions.responseMode === 'fragment')
    assert(initOptions.flow === 'standard')
    assert(initOptions.responseType === 'code')
    assert(initOptions.onLoad === 'login-required')
  })

  test('flow is standard', () => {
    const options = {
      responseMode: 'fragment',
      flow: 'implicit',
      onLoad: 'check-sso',
    }
    const initOptions = new KeycloakInitOptions(options)

    assert(initOptions.flow === 'implicit')
    assert(initOptions.responseType === 'id_token token')
    assert(initOptions.onLoad === 'check-sso')
  })

  test('flow is hybrid', () => {
    const options = {
      responseMode: 'fragment',
      flow: 'hybrid',
      onLoad: 'check-sso',
    }
    const initOptions = new KeycloakInitOptions(options)

    assert(initOptions.flow === 'hybrid')
    assert(initOptions.responseType === 'code id_token token')
    assert(initOptions.onLoad === 'check-sso')
  })
})
