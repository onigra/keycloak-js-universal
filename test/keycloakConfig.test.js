import KeycloakConfig from '~/src/keycloakConfig'
import assert from 'assert'

describe('KeycloakConfig', () => {
  const config = {
    realm: 'my-realm',
    url: 'https://localhost:8080/auth',
    clientId: 'my-realm-client',
    redirectUri: 'https://localhost:3000/',
  }

  test('constructor', () => {
    const kcConfig = new KeycloakConfig(config)

    assert(kcConfig.realm === 'my-realm')
    assert(kcConfig.url === 'https://localhost:8080/auth')
    assert(kcConfig.clientId === 'my-realm-client')
    assert(kcConfig.redirectUri === 'https://localhost:3000/')
  })

  test('authUrl', () => {
    const expected =
      'https://localhost:8080' +
      '/auth/realms/my-realm/protocol/openid-connect/auth' +
      '?client_id=my-realm-client&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F'

    const kcConfig = new KeycloakConfig(config)
    assert(expected === kcConfig.authUrl())
  })

  test('registrationUrl', () => {
    const expected =
      'https://localhost:8080' +
      '/auth/realms/my-realm/protocol/openid-connect/registrations' +
      '?client_id=my-realm-client&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F'

    const kcConfig = new KeycloakConfig(config)
    assert(expected === kcConfig.registrationUrl())
  })
})
