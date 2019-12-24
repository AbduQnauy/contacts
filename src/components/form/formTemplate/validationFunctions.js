//
export const required = value => (value ? undefined : "Required");
//
export const alphaChar = value =>
  /^[a-zA-Z]+$/i.test(value) ? undefined : "Alphabetic Characters Preferable";
//
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
//
export const minLength3 = minLength(3);
//
export const phoneNumber = value =>
  value && !/^\d{10}$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;
//
export const realPhone = value =>
  /^([0-9])\1*$/.test(value) ? "Real phone number Preferable" : undefined;
//
