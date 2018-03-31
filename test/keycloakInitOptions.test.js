import KeycloakInitOptions from '~/src/keycloakInitOptions'
import assert from 'assert'

describe('KeycloakInitOptions', () => {
  test('flow is standard', () => {
    const initOptions = new KeycloakInitOptions()

    assert(initOptions.responseMode === 'fragment')
    assert(initOptions.flow === 'standard')
    assert(initOptions.responseType === 'code')
    assert(initOptions.onLoad === 'check-sso')
  })

  test('flow is implicit', () => {
    const options = { flow: 'implicit' }
    const initOptions = new KeycloakInitOptions(options)

    assert(initOptions.flow === 'implicit')
    assert(initOptions.responseType === 'id_token token')
  })

  test('flow is hybrid', () => {
    const options = { flow: 'hybrid' }
    const initOptions = new KeycloakInitOptions(options)

    assert(initOptions.flow === 'hybrid')
    assert(initOptions.responseType === 'code id_token token')
  })
})
