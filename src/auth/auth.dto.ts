import { IsEmail, IsNotEmpty, Matches, MinLength } from "class-validator";
import { MESSAGES, REGEX } from "./auth.utils";

export class CreateUserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @MinLength(8)
  @IsNotEmpty()
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWORD_ERROR_REGEX
  })
  password: string;
}

export class UserCommonDetailsDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class UserEditDTO {
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}
