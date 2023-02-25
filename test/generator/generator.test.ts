import { generateId, generatePassword } from '../../code/index'; // import your functions from your module

describe('generateId', () => {
    it('should generate a unique ID of the specified length', () => {
        const id = generateId(10); // generate a 10-character ID
        expect(id).toHaveLength(10); // check that the length of the ID is 10
    });

    it('should generate a 6-character ID when the length parameter is less than 6', () => {
        const id = generateId(3); // generate a 3-character ID
        expect(id).toHaveLength(6); // check that the length of the ID is 6
    });

    it('should generate a 15-character ID when the length parameter is greater than 15', () => {
        const id = generateId(20); // generate a 20-character ID
        expect(id).toHaveLength(15); // check that the length of the ID is 15
    });

    it('should generate a unique ID every time', () => {
        const id1 = generateId(10);
        const id2 = generateId(10);
        expect(id1).not.toBe(id2); // check that the two IDs are not the same
    });
});

describe('generatePassword', () => {
    it('should generate a random password of the specified length', () => {
        const password = generatePassword(10); // generate a 10-character password
        expect(password).toHaveLength(10); // check that the length of the password is 10
    });

    it('should generate an 8-character password when the length parameter is less than 8', () => {
        const password = generatePassword(3); // generate a 3-character password
        expect(password).toHaveLength(8); // check that the length of the password is 8
    });

    it('should generate a random password every time', () => {
        const password1 = generatePassword(10);
        const password2 = generatePassword(10);
        expect(password1).not.toBe(password2); // check that the two passwords are not the same
    });
});
