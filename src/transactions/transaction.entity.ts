import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

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
        type: "boolean",
        default: false
    })
    isDeleted: boolean;
}
