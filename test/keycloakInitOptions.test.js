import KeycloakInitOptions from '~/src/keycloakInitOptions'
import assert from 'assert'

describe('KeycloakInitOptions', () => {
  test('constructor', () => {
    const options = {
      responseMode: 'fragment',
    }
    const initOptions = new KeycloakInitOptions(options)

    assert(initOptions.responseMode === 'fragment')
  })
})
