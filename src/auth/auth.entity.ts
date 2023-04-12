import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Auths")
export class Auth extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: "Unique Identifier"
  })
  id: number;

  @Column({
    type: "varchar"
  })
  name: string;

  @Column({
    type: "varchar"
  })
  email: string;

  @Column({
    type: "varchar"
  })
  password: string;

  @Column({
    type: "boolean",
    default: false
  })
  isVerified: boolean;
}
