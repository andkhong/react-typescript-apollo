import {
  isEmailValid,
  isPasswordValid,
  isFirstNameValid,
  isLastNameValid
} from 'utils/formValidation';

describe('formValidation.ts', () => {

  it('Email Validator should be working', () => {
    expect(isEmailValid('andkhong@gmail.com')).toBe(true);
    expect(isEmailValid('andkhong@.com')).toBe(false);
  });
  
  it('Password Validator should be working', () => {
    expect(isPasswordValid('HelloWorld01!')).toBe(true);
    expect(isPasswordValid('ApplesBannan')).toBe(false);
    expect(isPasswordValid('        ')).toBe(false);
    expect(isPasswordValid('littleLittle10')).toBe(false);
  });
  
  it('First Name Validator should be working', () => {
    expect(isFirstNameValid('andy ')).toBe(true);
  });
  
  it('Last Name Validator should be working', () => {
    expect(isLastNameValid('khong')).toBe(true);
  });
  
})
