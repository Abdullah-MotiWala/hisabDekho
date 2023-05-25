import { IsNotEmpty, IsNumber, Min, } from "class-validator";

export class AddTransaction {
    title: string;

    description: string

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    amount: number

}


