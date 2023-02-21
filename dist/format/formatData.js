"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatData = void 0;
/**
 * Replaces placeholders in a string with corresponding values from an object.
 * @param {any} data - The object containing the data to replace the placeholders with.
 * @param {string} text - The string containing placeholders.
 * @returns {string} The formatted string.
 */
function formatData(data, text) {
    let formattedData = text;
    for (const key in data) {
        formattedData = formattedData.replace(new RegExp(`{${key}}`, 'g'), data[key]);
    }
    return formattedData;
}
exports.formatData = formatData;
