"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDayOfWeek = void 0;
/**
 * Gets the name of the day of the week for the given date object.
 *
 * @param {Date} date - The date object to get the day of the week for. If not provided, the current date and time will be used.
 * @param {string} locale - The locale to use for the day of the week name. Defaults to "en-US".
 * @returns {string} The name of the day of the week in the specified locale.
 */
function getDayOfWeek(date = new Date(), locale = 'en-US') {
    const dayOfWeek = date.toLocaleDateString(locale, { weekday: 'long' });
    return dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
}
exports.getDayOfWeek = getDayOfWeek;
