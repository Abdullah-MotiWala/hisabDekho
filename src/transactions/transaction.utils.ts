import { HttpStatus, ValidationPipe } from "@nestjs/common";



// Settings
const VALIDATION_PIPES = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
});
export const SETTINGS = {
  VALIDATION_PIPES
};



// Success Messages
const CREATE_SUCCEED = "Transaction added succesfully";
export const SUCCESS_MESSAGES = { CREATE_SUCCEED };