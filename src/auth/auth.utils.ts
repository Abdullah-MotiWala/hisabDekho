import { HttpStatus, UsePipes, ValidationPipe } from "@nestjs/common";

// Rules
const PASSWORD_RULE =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const REGEX = {
  PASSWORD_RULE
};

// Error Message
const PASSWORD_ERROR_REGEX =
  "Password must have 1 upper case letter, 1 lower case letter, 1 digit, 1 special character";
export const MESSAGES = {
  PASSWORD_ERROR_REGEX
};

// Settings
const VALIDATION_PIPES = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
});
export const SETTINGS = {
  VALIDATION_PIPES
};
