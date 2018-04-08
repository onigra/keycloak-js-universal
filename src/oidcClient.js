// @flow

import Oidc from 'oidc-client'
import KeycloakConfig from './keycloakConfig'
import KeycloakOptions from './keycloakOptions'

export default class OidcClient {
  static AUTHORIZATION_ENDPOINT = '/protocol/openid-connect/auth'
  static USERINFO_ENDPOINT = '/protocol/openid-connect/userinfo'
  static END_SESSION_ENDPOINT = '/protocol/openid-connect/logout'
  static JWKS_URL = '/protocol/openid-connect/certs'

  static createClient(kcConfig: KeycloakConfig, kcOptions: KeycloakOptions) {
    return new Oidc.UserManager({
      userStore: new Oidc.WebStorageStateStore(),
      authority: kcConfig.url + '/realms/' + kcConfig.realm,
      client_id: kcConfig.clientId,
      response_type: kcOptions.responseType,
      scope: kcConfig.scope,
      loadUserInfo: true,
      redirect_uri: kcConfig.loginRedirectUri,
      post_logout_redirect_uri: kcConfig.logoutRedirectUri,
      authorization_endpoint: OidcClient.AUTHORIZATION_ENDPOINT,
      userinfo_endpoint: OidcClient.USERINFO_ENDPOINT,
      end_session_endpoint: OidcClient.END_SESSION_ENDPOINT,
      jwks_uri: OidcClient.JWKS_URL,
    })
  }
}
