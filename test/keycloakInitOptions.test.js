import KeycloakInitOptions from '~/src/keycloakInitOptions'
import assert from 'assert'

describe('KeycloakInitOptions', () => {
  test('constructor', () => {
    const options = {
      responseMode: 'fragment',
      flow: 'standard',
    }
    const initOptions = new KeycloakInitOptions(options)

    assert(initOptions.responseMode === 'fragment')
    assert(initOptions.flow === 'standard')
    assert(initOptions.responseType === 'code')
  })
})
