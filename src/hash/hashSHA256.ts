import crypto from 'crypto';
/**
 * Returns the SHA256 hash of the given data.
 * @param {string} data The data to hash.
 * @returns {string} The SHA256 hash of the data.
 */
export function hashSHA256( data: string ): string
{
    const hash = crypto.createHash( 'sha256' );
    hash.update( data );
    return hash.digest( 'hex' );
}
