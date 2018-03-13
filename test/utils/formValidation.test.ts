const {
  isEmailValid,
  isPasswordValid,
  isFirstNameValid,
  isLastNameValid
} = require('../../src/utils/formValidation');

test('Email Validator should be working', () => {
  expect(isEmailValid('andkhong@gmail.com')).toBe(true);
  expect(isEmailValid('andkhong@.com')).toBe(false);
});

test('Password Validator should be working', () => {
  expect(isPasswordValid('ApplesBannan')).toBe(false);
  expect(isPasswordValid('litlte')).toBe(false);
  expect(isPasswordValid('litlte')).toBe(false);
  expect(isPasswordValid('litlte')).toBe(false);
});

// test('First Name Validator should be working', () => {
//   expect(isFirstNameValid('')).toBe(true);
//   expect(isFirstNameValid('')).toBe(false);
// });

// test('Last Name Validator should be working', () => {
//   expect(isLastNameValid('')).toBe(true);
//   expect(isLastNameValid('')).toBe(false);
// });