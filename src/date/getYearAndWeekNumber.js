"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearAndWeekNumber = void 0;
/**
 * Gets the year and week number for the given date object.
 *
 * @param {Date} date - The date object to get the year and week number for. If not provided, the current date and time will be used.
 * @returns {number} An object containing the year and week number for the specified date object.
 */
function getYearAndWeekNumber(date = new Date()) {
    // Get the year and the number of days since January 1st of that year
    const year = date.getFullYear();
    const startOfYear = new Date(year, 0, 1);
    const daysSinceStart = Math.floor((date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
    // Calculate the week number based on the number of days since the beginning of the year
    const weekNumber = Math.floor((daysSinceStart + startOfYear.getDay() - 1) / 7) + 1;
    // Return an object with the year and week number
    return { year, weekNumber };
}
exports.getYearAndWeekNumber = getYearAndWeekNumber;
