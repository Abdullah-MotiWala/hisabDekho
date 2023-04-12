import { Injectable } from "@nestjs/common";
import { CreateUserDTO, UserCommonDetailsDTO } from "./auth.dto";
import { Auth } from "./auth.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthsService {
  async create(body: CreateUserDTO): Promise<Auth> {
    const { name, email } = body;

    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(body.password, salt);

    // creating new entity
    const user = new Auth();
    user.name = name;
    user.email = email;
    user.password = hashedPass;

    // saving user in db
    return await user.save();
  }

  findOne(body: UserCommonDetailsDTO): string {
    console.log("body");
    return "get";
  }
}
