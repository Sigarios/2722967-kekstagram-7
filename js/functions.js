// eslint-disable-next-line no-unused-vars
const checkStringLength = function (string, maxLength) {
  return string.length <= maxLength;
};

// eslint-disable-next-line no-unused-vars
const isPalindrome = function (string) {
  const preparedString = string.toLowerCase().replace(/ /g, '');
  let reversedString = '';

  for (let i = preparedString.length - 1; i >= 0; i--) {
    reversedString += preparedString[i];
  }

  return preparedString === reversedString;
};

// eslint-disable-next-line no-unused-vars
const extractDigits = function (value) {
  const string = String(value);
  let digits = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] >= '0' && string[i] <= '9') {
      digits += string[i];
    }
  }

  if (digits === '') {
    return NaN;
  }

  return parseInt(digits, 10);
};


