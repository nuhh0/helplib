const { formatDate, getDayOfWeek, getMonthName, getYearAndWeekNumber } = require('../../code/index');

describe('formatDate', () => {
    test('returns the default date format if no parameters are passed', () => {
        expect(formatDate()).toMatch(/^\d{1,2}\/\d{1,2}\/\d{4} \d{1,2}:\d{1,2}:\d{1,2}$/);
    });
    test('returns the formatted date string with parameters passed', () => {
        const date = new Date('2023-02-18T08:00:00.000Z');
        const format = 'y/MM/d';
        expect(formatDate(date, format)).toEqual('2023/02/18');
    });
});

describe('getDayOfWeek', () => {
    test('returns the correct day of the week for the given date', () => {
        const date = new Date('2023-02-18T08:00:00.000Z');
        expect(getDayOfWeek(date)).toEqual('Saturday');
    });
});

describe('getMonthName', () => {
    test('returns the correct month name for the given date', () => {
        const date = new Date('2023-02-18T08:00:00.000Z');
        expect(getMonthName(date)).toEqual('February');
    });
});

describe('getYearAndWeekNumber', () => {
    test('returns the correct year and week number for the given date', () => {
        const date = new Date('2023-02-18T08:00:00.000Z');
        expect(getYearAndWeekNumber(date)).toEqual({ year: 2023, weekNumber: 7 });
    });
});
