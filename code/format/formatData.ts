/**
 * Replaces placeholders in a string with corresponding values from an object.
 * @param {any} data - The object containing the data to replace the placeholders with.
 * @param {string} text - The string containing placeholders.
 * @returns {string} The formatted string.
 */
export function formatData(data: any, text: string): string {
    let formattedData = text;
    for (const key in data) {
        formattedData = formattedData.replace(new RegExp(`{${key}}`, 'g'), data[key]);
    }
    return formattedData;
}
