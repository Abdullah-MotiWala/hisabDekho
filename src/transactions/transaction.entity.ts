import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";
import { transactionTypes } from "./transaction.utils";

@Entity("Transaction")
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: "Unique Identifier"
    })
    id: number;

    @Column({
        type: "varchar"
    })
    title: string;

    @Column({
        type: "varchar"
    })
    description: string;

    @Column({
        type: "numeric"
    })
    amount: number;

    @Column({
        type: "numeric"
    })
    createdBy: number

    @Column({
        type: "numeric",
    })
    transType: number | string

    @Column({
        type: "boolean",
        default: false
    })
    isDeleted: boolean;
}
