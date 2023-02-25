"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthName = void 0;
/**
 * Gets the name of the month for the given date object.
 *
 * @param {Date} date - The date object to get the month name for. If not provided, the current date and time will be used.
 * @param {string} locale - The locale to use for the month name. Defaults to "en-US".
 * @returns {string} The name of the month in the specified locale.
 */
function getMonthName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, { month: 'long' });
}
exports.getMonthName = getMonthName;
