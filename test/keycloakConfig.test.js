import KeycloakConfig from '~/src/keycloakConfig'
import assert from 'assert'

describe('KeycloakConfig', () => {
  describe('scope is undefined', () => {
    const config = {
      realm: 'my-realm',
      url: 'https://localhost:8080/auth',
      clientId: 'my-realm-client',
      loginRedirectUri: 'https://localhost:3000/callback/login',
      logoutRedirectUri: 'https://localhost:3000/callback/logout',
      signupRedirectUri: 'https://localhost:3000/callback/signup',
    }

    test('constructor', () => {
      const kcConfig = new KeycloakConfig(config)

      assert(kcConfig.realm === 'my-realm')
      assert(kcConfig.url === 'https://localhost:8080/auth')
      assert(kcConfig.clientId === 'my-realm-client')
      assert(kcConfig.loginRedirectUri === 'https://localhost:3000/callback/login')
      assert(kcConfig.logoutRedirectUri === 'https://localhost:3000/callback/logout')
      assert(kcConfig.signupRedirectUri === 'https://localhost:3000/callback/signup')
      assert(kcConfig.scope === 'openid')
    })

    test('registrationUrl', () => {
      const expected =
        'https://localhost:8080' +
        '/auth/realms/my-realm/protocol/openid-connect/registrations' +
        '?client_id=my-realm-client' +
        '&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fcallback%2Fsignup' +
        '&scope=openid'

      const kcConfig = new KeycloakConfig(config)
      assert(expected === kcConfig.registrationUrl())
    })
  })

  describe('scope is defined', () => {
    const config = {
      realm: 'my-realm',
      url: 'https://localhost:8080/auth',
      clientId: 'my-realm-client',
      loginRedirectUri: 'https://localhost:3000/callback/login',
      logoutRedirectUri: 'https://localhost:3000/callback/logout',
      signupRedirectUri: 'https://localhost:3000/callback/signup',
      scope: 'openid user role',
    }

    test('constructor', () => {
      const kcConfig = new KeycloakConfig(config)

      assert(kcConfig.realm === 'my-realm')
      assert(kcConfig.url === 'https://localhost:8080/auth')
      assert(kcConfig.clientId === 'my-realm-client')
      assert(kcConfig.loginRedirectUri === 'https://localhost:3000/callback/login')
      assert(kcConfig.logoutRedirectUri === 'https://localhost:3000/callback/logout')
      assert(kcConfig.signupRedirectUri === 'https://localhost:3000/callback/signup')
      assert(kcConfig.scope === 'openid user role')
    })

    test('registrationUrl', () => {
      const expected =
        'https://localhost:8080' +
        '/auth/realms/my-realm/protocol/openid-connect/registrations' +
        '?client_id=my-realm-client' +
        '&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fcallback%2Fsignup' +
        '&scope=openid%20user%20role'

      const kcConfig = new KeycloakConfig(config)
      assert(expected === kcConfig.registrationUrl())
    })
  })
})
