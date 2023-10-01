# helplib
##### helplib is an npm module that provides useful functions, including date, formatting, generation functionalities.

## Installation

##### You can install the module using the [node package manager](https://www.npmjs.com/):

```sh
npm install helplib
```

## Table of Contents

- [Functions](#functions)
  - [Date functions](#date-functions)
    - [formatDate(date, format);](#formatdatedate-format)
    - [getDayOfWeek(date, locale);](#getdayofweekdate-locale)
    - [getMonthName(date, locale);](#getmonthnamedate-locale)
    - [getYearAndWeekNumber(date);](#getyearandweeknumberdate)
  - [Formatting functions](#formatting-functions)
    - [formatData(data, text);](#formatdatadata-text)
    - [formatString(text, ...params);](#formatstringtext-params)
  - [Generation functions](#generation-functions)
    - [generateId(length);](#generateidlength)
    - [generatePassword(length);](#generatepasswordlength)

## Functions

##### The module includes functions that are grouped into different categories:

### Date functions

#### formatDate(date, format);

##### Formats the given date object as a string using the specified format.

###### `date`: The date object to format. If not provided, the current date and time will be used.

###### `format`: The format string to use. Defaults to `M/d/y H:m:s`

###### `format info` M: Month, d: day, H: Hours, m: minutes, s: seconds, f: miliseconds, y: year

```js
const { formatDate } = require('helplib');

console.log(formatDate()); // 02/19/2023 17:04:1
console.log(formatDate(new Date(), 'd/MM/y H:mm:s')); // 19/02/2023 17:04:1
console.log(formatDate(undefined, 'd/MM/y H:mm:s:f')); // 19/02/2023 17:04:1:95
```

#### getDayOfWeek(date, locale);

###### Gets the name of the day of the week for the given date object.

###### `date`: The date object to get the day of the week for. If not provided, the current date and time will be used.

###### `locale`: The locale to use for the day of the week name. Defaults to "en-US".

```js
const { getDayOfWeek } = require('helplib');

console.log(getDayOfWeek()); // Sunday
console.log(getDayOfWeek(new Date(), 'en-US')); // Sunday
console.log(getDayOfWeek(undefined, 'tr-TR')); // Pazar
```

#### getMonthName(date, locale);

##### Gets the name of the month for the given date object.

###### `date`: The date object to get the month name for. If not provided, the current date and time will be used.

###### `locale`: The locale to use for the month name. Defaults to "en-US".

```js
const { getMonthName } = require('helplib');

console.log(getMonthName()); // Februrary
console.log(getMonthName(new Date(), 'en-US')); // Februrary
console.log(getMonthName(undefined, 'tr-TR')); // Şubat
```

#### getYearAndWeekNumber(date);

##### Gets the year and week number for the given date object.

###### `date`: The date object to get the year and week number for. If not provided, the current date and time will be used.

```js
const { getYearAndWeekNumber } = require('helplib');

console.log(getYearAndWeekNumber()); // { year: 2023, weekNumber: 7 }
console.log(getYearAndWeekNumber(new Date())); // { year: 2023, weekNumber: 7 }
console.log(getYearAndWeekNumber(undefined)); // { year: 2023, weekNumber: 7 }
```

### Formatting functions

#### formatData(data, text);

##### Replaces placeholders in a string with corresponding values from an object.

###### `data`: The date object to get the year and week number for. If not provided, the current date and time will be used.

###### `text`: The string containing placeholders.

```js
const { formatData } = require('helplib');

const data = {
    name: 'John Doe',
    age: 32,
    city: 'New York'
};
const text = 'Hi, my name is {name} and I am {age} years old. I live in {city}.';

const formattedText = formatData(data, text);
console.log(formattedText); // Hi, my name is John Doe and I am 32 years old. I live in New York.
```

#### formatString(text, ...params);

##### Replaces placeholders in a string with values.

###### `text`: The string containing placeholders.

###### `...params`: The values to replace the placeholders with.

```js
const { formatString } = require('helplib');

const name = "John Doe";
const age = 30;
const country = "USA";
const result = formatString("My name is {0}, I am {1} years old and I live in {2}.", name, age, country);
console.log(result); // My name is John Doe, I am 30 years old and I live in USA.
```

### Generation functions

#### generateId(length);

##### Generate a unique ID.

###### `length`: The length of the generated ID. Default is 11.

###### `length info` If the length value is less than six, a 6-character id is generated, and likewise, if the length value is greater than fifteen, a 15-character id is generated.

```js
const { generateId } = require('helplib');

console.log(generateId()); // 47545019992 => length = 11;
console.log(generateId(5)); // 014915 => length = 6;
console.log(generateId(16)); // 226306621525260 => length = 15;
```

#### generatePassword(length);

##### Generate a random password.

###### `length`: The length of the generated password. Default is 8.

###### `length info` If the length value is less than eight, a password of length eight is generated.

```js
const { generatePassword } = require('helplib');

console.log(generatePassword()); // i2o2a3My => length = 8;
console.log(generatePassword(7)); // fUYzWVZ0 => length = 8;
```

## License
##### `helplib` is released under the [MIT License](https://opensource.org/licenses/MIT).
