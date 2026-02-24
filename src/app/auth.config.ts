import { AuthConfig} from 'angular-oauth2-oidc'

export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '44370919178-p4ua1e91v9h6pu0od6pv14i6pm02ln0u.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false

}