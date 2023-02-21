"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = void 0;
/**
 * Generate a unique ID.
 *
 * @param {number} length - The length of the generated ID. Default is 11.
 * @returns {string} - The generated ID.
 */
const crypto_1 = __importDefault(require("crypto"));
function generateId(length = 11) {
    const maxLength = 15; // Maximum ID length
    const minLength = 6; // Minimum ID length
    if (length < minLength) {
        length = minLength; // If the specified length is less than 6, create a 6-character ID
    }
    if (length > maxLength) {
        length = maxLength; // If the specified length is greater than 15, set the length to 15
    }
    const randomString = Array.from(crypto_1.default.getRandomValues(new Uint8Array(length)), (byte) => byte.toString(10)).join('').padStart(length, '0'); // Generate random number and convert to string
    const timestamp = (performance.now() + Date.now()).toString().replace('.', ''); // Generate timestamp
    const id = `${timestamp}${randomString}`.slice(-length); // Concatenate timestamp and random number and slice to the specified length
    return id;
}
exports.generateId = generateId;
