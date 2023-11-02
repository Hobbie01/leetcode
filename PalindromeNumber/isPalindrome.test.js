
const isPalindrome = require('./')

test('121 is a palindrome', () => {
  expect(isPalindrome(121)).toBe(true);
});

test('-121 is not a palindrome', () => {
  expect(isPalindrome(-121)).toBe(false);
});

test('10 is not a palindrome', () => {
  expect(isPalindrome(10)).toBe(false);
});
