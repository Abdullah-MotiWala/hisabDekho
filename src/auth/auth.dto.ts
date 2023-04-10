import { IsEmail, IsNotEmpty, Matches, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @MinLength(8)
    @Matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")
    password: string;

}

export class UserCommonDetailsDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string;


    @IsNotEmpty()
    password: string;

}