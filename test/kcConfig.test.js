import KcConfig from '~/src/kcConfig'
import assert from 'assert'

describe('KcConfig', () => {
  test('constructor', () => {
    const config = {
      realm: "my-realm",
      url: "http://localhost:8080/auth",
      clientId: "my-realm-client"
    }

    const kcConfig = new KcConfig(config)

    assert(kcConfig.realm === "my-realm")
    assert(kcConfig.url === "http://localhost:8080/auth")
    assert(kcConfig.clientId === "my-realm-client")
  })
})