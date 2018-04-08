import KeycloakOptions from '~/src/keycloakOptions'
import assert from 'assert'

describe('KeycloakOptions', () => {
  test('flow is implicit', () => {
    const options = new KeycloakOptions()

    assert(options.responseMode === 'fragment')
    assert(options.flow === 'implicit')
    assert(options.responseType === 'id_token token')
    assert(options.onLoad === 'check-sso')
  })

  test('flow is standard', () => {
    const options = new KeycloakOptions({ flow: 'standard' })

    assert(options.flow === 'standard')
    assert(options.responseType === 'code')
  })

  test('flow is hybrid', () => {
    const options = new KeycloakOptions({ flow: 'hybrid' })

    assert(options.flow === 'hybrid')
    assert(options.responseType === 'code id_token token')
  })
})
