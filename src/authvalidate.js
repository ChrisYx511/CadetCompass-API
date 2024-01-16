import * as jose from 'jose'
import axios from 'axios'

const openidDiscoveryURI = 'https://login.microsoftonline.com/bdfee2d1-e1a2-48f9-bc73-f52ffee2db1d/v2.0/.well-known/openid-configuration'
let JWKSUri = ''
let JWKS = ''
const jwtOptions = {
    audience: 'api://f20cc733-eebf-463a-ab96-563ba859f21e',
    issuer: 'https://sts.windows.net/bdfee2d1-e1a2-48f9-bc73-f52ffee2db1d/',
}
async function getJWKSUri() {
    await axios.get(openidDiscoveryURI).then((response) => {
        JWKSUri = response.data.jwks_uri
        JWKS = jose.createRemoteJWKSet(new URL(JWKSUri))
        console.log('OK '+ JWKSUri)
    })
    .catch(err => {
        throw err
    })
}


getJWKSUri()

/**
 * Validate JWT and check authentication
 * @param {string} bearerToken 
 */
export async function validateAuthToken(bearerToken) {
    if (bearerToken === undefined) {
        throw [401, 'Unauthenticated!']
    }
    let token = bearerToken.replace('Bearer ', '')
    return await jose.jwtVerify(token, JWKS, jwtOptions).then((response) => {
        if (response.payload.scp = 'CadetData.ReadAll') {
            //console.log(response.payload.scp)
            return response
        } else {
            throw [403, 'Invalid Scope!']
        }
    }).catch((err) => {
        if (err[0] == 403) {
            throw err
        } else {
            throw [401, 'Unauthenticated! ' + err]
        }
    })
}