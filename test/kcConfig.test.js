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
})