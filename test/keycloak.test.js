import Keycloak from '~/src/keycloak'
import assert from 'assert'
import 'jest-localstorage-mock'

describe('Keycloak', () => {
  const config = {
    realm: 'my-realm',
    url: 'https://localhost:8080/auth',
    clientId: 'my-realm-client',
    loginRedirectUri: 'https://localhost:3000/callback/login',
    logoutRedirectUri: 'https://localhost:3000/callback/logout',
    signupRedirectUri: 'https://localhost:3000/callback/signup',
  }

  test('createRegisterUrl', () => {
    const urlRegexp =
      'https://localhost:8080' +
      '/auth/realms/my-realm/protocol/openid-connect/registrations' +
      '\\?client_id=my-realm-client' +
      '&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fcallback%2Fsignup' +
      '&scope=openid' +
      '&state=([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})' +
      '&nonce=([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})' +
      '&response_mode=fragment' +
      '&response_type=code'
    const expected = new RegExp(urlRegexp)

    const keycloak = new Keycloak(config)
    expect(keycloak.createRegisterUrl()).toMatch(expected)
  })
})
