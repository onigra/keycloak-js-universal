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
    const urlRegexp = 'https:\/\/localhost:8080' +
      '\/auth\/realms\/my-realm\/protocol\/openid-connect\/auth' +
      '\\?client_id=my-realm-client&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F' +
      '&state=([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})' +
      '&response_mode=fragment' +
      '&response_type=code' +
      '&scope=openid'
    const expected = new RegExp(urlRegexp)

    const keycloak = new Keycloak(config)
    expect(keycloak.createLoginUrl()).toMatch(expected)
  })

  test('createRegisterUrl', () => {
    const urlRegexp = 'https:\/\/localhost:8080' +
      '\/auth\/realms\/my-realm\/protocol\/openid-connect\/registrations' +
      '\\?client_id=my-realm-client&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F' +
      '&state=([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})' +
      '&response_mode=fragment' +
      '&response_type=code' +
      '&scope=openid'
    const expected = new RegExp(urlRegexp)

    const keycloak = new Keycloak(config)
    expect(keycloak.createRegisterUrl()).toMatch(expected)
  })
})
