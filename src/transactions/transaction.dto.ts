import { IsNotEmpty, IsNumber, Min, } from "class-validator";

export class AddTransaction {
    title: string;

    description: string

    @IsNotEmpty()
    transType: number



    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    amount: number

}
