import { hashSHA256, hashSHA256Controller } from '../../code/index';
import crypto from 'crypto';

describe('hashSHA256', () => {
    it('should return the SHA256 hash of the given data', () => {
        const input = 'secret';
        const expectedOutput = crypto.createHash('sha256').update(input).digest('hex');
        expect(hashSHA256(input)).toEqual(expectedOutput);
    });
});

describe('hashSHA256Controller', () => {
    it('should return true if the given hash matches the SHA256 hash of the given data', () => {
        const data = 'secret';
        const hash = crypto.createHash('sha256').update(data).digest('hex');
        expect(hashSHA256Controller(data, hash)).toBe(true);
    });

    it('should return false if the given hash does not match the SHA256 hash of the given data', () => {
        const data = 'secret';
        const hash = crypto.createHash('sha256').update('wrong-password').digest('hex');
        expect(hashSHA256Controller(data, hash)).toBe(false);
    });

    it('should throw an error if data is missing', () => {
        const hash = crypto.createHash('sha256').update('secret').digest('hex');
    });
});
