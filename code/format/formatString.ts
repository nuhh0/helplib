/**
 * Replaces placeholders in a string with values.
 * @param {string} text - The string containing placeholders.
 * @param {any} params - The values to replace the placeholders with.
 * @returns {string} The formatted string.
 */
export function formatString(text: string, ...params: any[]): string {
    if (params.length <= 0) throw new Error("Invalid input: params is missing.");
    let result = text;
    for (let i = 0; i < params.length; i++) {
        result = result.replace(new RegExp(`\\{${i}\\}`, 'g'), params[i]);
    }
    return result;
}
