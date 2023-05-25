import { HttpStatus, ValidationPipe } from "@nestjs/common";

export const transactionTypes = ["expense", "income"]

// Error Messages
const USER_NOT_FOUND = "User not found";
export const ERROR_MESSAGES = {
  USER_NOT_FOUND,
};

// Settings
const VALIDATION_PIPES = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
});
export const SETTINGS = {
  VALIDATION_PIPES
};



// Success Messages
const CREATE_SUCCEED = "Transaction added succesfully";
const UPDATE_SUCCEED = "Transaction updated successfully"
const DELETE_SUCCEED = "Transaction deleted successfully"

export const SUCCESS_MESSAGES = { CREATE_SUCCEED, UPDATE_SUCCEED, DELETE_SUCCEED };