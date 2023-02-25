import { formatData, formatString } from '../../code/index';

describe('formatData', () => {
    it('should replace placeholders in a string with corresponding values from an object', () => {
        const data = {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        };
        const text = 'My name is {firstName} {lastName} and I am {age} years old.';
        const expected = 'My name is John Doe and I am 30 years old.';
        const result = formatData(data, text);
        expect(result).toEqual(expected);
    });
});

describe('formatString', () => {
    it('should replace placeholders in a string with values', () => {
        const text = 'My name is {0} {1} and I am {2} years old.';
        const expected = 'My name is John Doe and I am 30 years old.';
        const result = formatString(text, 'John', 'Doe', 30);
        expect(result).toEqual(expected);
    });

    it('should throw an error when params is missing', () => {
        const text = 'My name is {0} {1} and I am {2} years old.';
        expect(() => formatString(text)).toThrow('Invalid input: params is missing.');
    });
});