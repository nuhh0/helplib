import crypto from 'crypto';
/**
 * Checks if the given hash matches the SHA256 hash of the given data.
 * @param {string} data The data to check.
 * @param {string} hash The hash to compare against.
 * @returns {boolean} A boolean indicating if the hash matches the SHA256 hash of the data.
 */
export function hashSHA256Controller(data: string, hash: string): boolean {
    const hasher = crypto.createHash('sha256');
    hasher.update(data);

    let status = false;
    if (hasher.digest('hex') == hash) status = true;
    return status;
}