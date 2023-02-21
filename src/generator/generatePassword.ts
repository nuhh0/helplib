/**
 * Generate a random password.
 *
 * @param {number} length - The length of the generated password. Default is 8.
 * @returns {string} - The generated password.
 */
export function generatePassword( length: number = 8 ): string
{
    if ( length < 8 ) var length = 8;
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for ( let i = 0; i < length; i++ )
    {
        password += charset.charAt( Math.floor( Math.random() * charset.length ) );
    }
    return password;
}