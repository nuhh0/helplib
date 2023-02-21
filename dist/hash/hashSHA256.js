"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashSHA256 = void 0;
const crypto_1 = __importDefault(require("crypto"));
/**
 * Returns the SHA256 hash of the given data.
 * @param {string} data The data to hash.
 * @returns {string} The SHA256 hash of the data.
 */
function hashSHA256(data) {
    const hash = crypto_1.default.createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
}
exports.hashSHA256 = hashSHA256;
