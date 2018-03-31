import Keycloak from '~/src/keycloak'
import assert from 'assert'

describe('Keycloak', () => {
  const config = {
    realm: 'my-realm',
    url: 'https://localhost:8080/auth',
    clientId: 'my-realm-client',
    redirectUri: 'https://localhost:3000/',
  }

  test('createLoginUrl', () => {
    const keycloak = new Keycloak(config)

    assert(
      keycloak.createLoginUrl() ===
        'https://localhost:8080/auth/realms/my-realm/protocol/openid-connect/auth?client_id=my-realm-client&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F',
    )
  })

  test('createRegisterUrl', () => {
    const keycloak = new Keycloak(config)

    assert(
      keycloak.createRegisterUrl() ===
        'https://localhost:8080/auth/realms/my-realm/protocol/openid-connect/registrations?client_id=my-realm-client&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F',
    )
  })
})
