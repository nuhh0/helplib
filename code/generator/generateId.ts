/**
 * Generate a unique ID.
 *
 * @param {number} length - The length of the generated ID. Default is 11.
 * @returns {string} - The generated ID.
 */
import crypto from 'crypto';
export function generateId(length: number = 11): string {
    const maxLength = 15; // Maximum ID length
    const minLength = 6; // Minimum ID length

    if (length < minLength) {
        length = minLength; // If the specified length is less than 6, create a 6-character ID
    }

    if (length > maxLength) {
        length = maxLength; // If the specified length is greater than 15, set the length to 15
    }

    const randomString = Array.from(crypto.getRandomValues(new Uint8Array(length)), (byte) => byte.toString(10)).join('').padStart(length, '0'); // Generate random number and convert to string

    const timestamp = (performance.now() + Date.now()).toString().replace('.', ''); // Generate timestamp

    const id = `${timestamp}${randomString}`.slice(-length); // Concatenate timestamp and random number and slice to the specified length

    return id;
}