import jwt, { JwtHeader, SigningKeyCallback, VerifyErrors } from 'jsonwebtoken';

import dotenv from 'dotenv';
import jwksClient, { SigningKey } from 'jwks-rsa';

dotenv.config();

const client = jwksClient({
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
});

function getKey(header: JwtHeader, callback: SigningKeyCallback) {
  if (header.kid) {
    client.getSigningKey(header.kid, (_: Error | null, key: SigningKey) => {
      const signingKey = 'publicKey' in key ? key.publicKey : key.rsaPublicKey;
      callback(null, signingKey);
    });
  }
}

async function isTokenValid(token: string) {
  if (token) {
    const bearerToken = token.split(' ');

    const result = new Promise<{ error?: VerifyErrors; decoded?: object }>((resolve) => {
      jwt.verify(
        bearerToken[1],
        getKey,
        {
          audience: process.env.API_IDENTIFIER,
          issuer: `https://${process.env.AUTH0_DOMAIN}/`,
          algorithms: ['RS256'],
        },
        (error: VerifyErrors | null, decoded?: object) => {
          if (error) {
            resolve({ error });
          }
          if (decoded) {
            resolve({ decoded });
          }
        },
      );
    });

    return result;
  }

  return { error: { message: 'No token provided' } };
}

export default isTokenValid;
