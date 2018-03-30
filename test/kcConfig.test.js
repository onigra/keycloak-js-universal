import KcConfig from '~/src/kcConfig'
import assert from 'assert'

describe('KcConfig', () => {
  const config = {
    realm: "my-realm",
    url: "https://localhost:8080/auth",
    clientId: "my-realm-client",
    redirectUri: "https://localhost:3000/"
  }

  test('constructor', () => {
    const kcConfig = new KcConfig(config)

    assert(kcConfig.realm === "my-realm")
    assert(kcConfig.url === "https://localhost:8080/auth")
    assert(kcConfig.clientId === "my-realm-client")
    assert(kcConfig.redirectUri === "https://localhost:3000/")
  })

  test('authUrl', () => {
    const kcConfig = new KcConfig(config)

    assert(kcConfig.authUrl() ===
      "https://localhost:8080/auth/realms/my-realm/protocol/openid-connect/auth?client_id=my-realm-client&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F"
    )
  })

  test('registrationUrl', () => {
    const kcConfig = new KcConfig(config)

    assert(kcConfig.registrationUrl() ===
      "https://localhost:8080/auth/realms/my-realm/protocol/openid-connect/registrations?client_id=my-realm-client&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F"
    )
  })
})
