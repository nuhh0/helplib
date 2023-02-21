"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashSHA256Controller = void 0;
const crypto_1 = __importDefault(require("crypto"));
/**
 * Checks if the given hash matches the SHA256 hash of the given data.
 * @param {string} data The data to check.
 * @param {string} hash The hash to compare against.
 * @returns {boolean} A boolean indicating if the hash matches the SHA256 hash of the data.
 */
function hashSHA256Controller(data, hash) {
    const hasher = crypto_1.default.createHash('sha256');
    hasher.update(data);
    let status = false;
    if (hasher.digest('hex') == hash)
        status = true;
    return status;
}
exports.hashSHA256Controller = hashSHA256Controller;
