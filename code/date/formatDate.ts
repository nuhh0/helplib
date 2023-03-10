/**
 * Formats the given date object as a string using the specified format.
 *
 * @param {Date} date - The date object to format. If not provided, the current date and time will be used.
 * @param {string} format - The format string to use. Defaults to "M/d/y H:m:s".
 * @returns {string} A string representation of the date object in the specified format.
 */
export function formatDate(date: Date = new Date(), format: string = 'M/d/y H:m:s'): string {
    const map: { [key: string]: number | string; } = {
        M: date.getMonth() + 1,
        d: date.getDate(),
        H: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
        f: date.getMilliseconds(),
        y: date.getFullYear(),
    };

    format = format.replace(/(M+|d+|H+|m+|s+|f+|y+)/g, (match) => {
        const value = map[match[0]];
        const padding = match.length > 1 ? '0'.repeat(match.length - 1) : '';
        return typeof value === 'number' ? padding + value.toString() : value;
    });

    return format;
}
