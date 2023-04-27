import { HttpStatus, UsePipes, ValidationPipe } from "@nestjs/common";

// Rules
const PASSWORD_RULE =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const REGEX = {
  PASSWORD_RULE
};

// Error Messages
const PASSWORD_ERROR_REGEX =
  "Password must have 1 upper case letter, 1 lower case letter, 1 digit, 1 special character";
const CRED_NOT_MATCHED = "Credentials not matched!";
export const ERROR_MESSAGES = {
  PASSWORD_ERROR_REGEX,
  CRED_NOT_MATCHED
};

// Success Messages
const LOGIN_SUCCEED = "Logged In succesfully";
const SIGNUP_SUCCEED = "Sign Up Successfully";
export const SUCCESS_MESSAGES = { SIGNUP_SUCCEED, LOGIN_SUCCEED };


// Settings
const VALIDATION_PIPES = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
});
export const SETTINGS = {
  VALIDATION_PIPES
};
