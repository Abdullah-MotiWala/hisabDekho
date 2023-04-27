import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";
import * as bcrypt from "bcrypt";

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

  @Column({
    type: "varchar"
  })
  emailToken: string;

  @BeforeInsert()
  // hashing password before saving using ORM middleware
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
