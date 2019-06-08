# validity-checker
[![npm](https://img.shields.io/badge/npm-v2.2.3-blue.svg)](https://www.npmjs.com/package/validity-checker) [![Join the chat at https://gitter.im/validity-checker/community](https://badges.gitter.im/validity-checker/community.svg)](https://gitter.im/validity-checker/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### Various types of functions to check the validity of various types of numbers and addresses.

## Installation
Install the library with `npm install validity-checker`

## Usage

```javascript
var validityChecker = require('validity-checker');
```

### 1. isEmail()
```javascript
var result = validityChecker.isEmail("sample_email@xyz.com");
```
returns true or false


### 2. isMobileNumber()
```javascript
var result = validityChecker.isMobileNumber("9999999999");
```
returns true or false

### 3. isBetweenDoubleQuotes()
```javascript
var result = validityChecker(isBetweenDoubleQuotes('Hello.. "Everybody"',"Everybody"));

/* returns true 

checks according to the case sensitivity

*/
```

### 4. isEmoji()
```javascript
var result = validityChecker(isEmoji("🙃🙃"));
/* returns true */
```

#### Can be able to check following patterns
  - (123) 456-7890
  - (123)456-7890
  - 123-456-7890
  - 123.456.7890
  - 1234567890
  - +31636363634
  - 075-63546725
  
  Some other other validity-checkers are:
  
  validity-checkers                  |   Description
  -----------------------------------|-----------------
  **isVisaCard()**                   | Returns true if the string is in the visa card format
  **isMasterCard()**                 | Returns true if the string is in the master card format
  **isAmericanExpressCard()**        | Returns true if the string is in the american express card format
  **isDinersClubCard()**             | Returns true if the string is in the Diners Club card format
  **isDiscoverCard()**               | Returns true if the string is in the Discover Card format
  **isJCBCard()**                    | Returns true if the string is in the JCB Card format
  **isCardNumber()**                 | Returns true if the string is in any of the above card formats
  **isStrongPassword()**             | Returns true if the password is strong
  **isMediumStrengthPassword()**     | Returns true if the password is neither too strong nor too weak
  **isPortNumber()**                 | Returns true if the string is valid Port number (except 0)
  **isMacAddress()**                 | Returns true if the string is a valid MAC Address
  **isValidUrl()**                   | Returns true if the string is a valid url (including ftp, https, smtp)
  **isHexColorCode()**               | Returns true if the string is a valid hex color code
  **isInternationalPassportNumber()**| Returns true if the string is a valid international passport number
  **isIMEINumber()**                 | Returns true if the number is a valid IMEI number 
  **isUUIDv4()**                     | Returns true if the entered string is uuid v4
  **isUSSD()**                       | Returns true if the entered string is a valid USSD Code
  **isBrainFuckCode()**              | Returns true if the entered string is a valid BrainFuck code
  **isMorseCode()**                  | Returns true if the entered string is a valid Morse Code or not
  **isIPV4()**                       | Returns true if the entered string is a valid IPv4
  **isIPV6()**                       | Returns true if the entered string is a valid IPv4
  **isBetweenDoubleQuotes()**        | Returns true if the entered string is contained in between double quotes
  **isEmoji()**                      | Returns true if the entered string is an Emoji

 ## Note
  The above mentioned functions validating only the format of the card numbers not the real card numbers.
 
  
