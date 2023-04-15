import { JwtService } from "@nestjs/jwt";
import { AuthHelper } from "./auth.helper";
import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from "@nestjs/common";
import { CreateUserDTO, UserCommonDetailsDTO, UserEditDTO } from "./auth.dto";
import { Auth } from "./auth.entity";
import { MESSAGES } from "./auth.utils";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthsService {
  constructor(private authHelper: AuthHelper) {}
  async create(body: CreateUserDTO): Promise<Auth> {
    const { name, email, password } = body;

    // creating new entity
    const user = new Auth();
    user.name = name;
    user.email = email;
    user.password = password;

    // saving user in db
    return await user.save();
  }

  async findOne(
    body: UserCommonDetailsDTO
  ): Promise<{ access_token: string } | undefined> {
    const { email, password } = body;
    const user = await Auth.findOne({ where: { email } });
    // const { email, password } = body;
    // // checking if user exist
    if (!user) throw new UnauthorizedException(MESSAGES.CRED_NOT_MATCHED);

    // // checking if password is correct
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched)
      throw new UnauthorizedException(MESSAGES.CRED_NOT_MATCHED);

    return this.authHelper.tokenGenerator(user);
  }

  async remove(id: number): Promise<string> {
    const user = await Auth.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }
    await Auth.delete(id);
    return "User Deleted Successfully";
  }

  async edit({ name, id }: { name: any; id: number }): Promise<string> {
    const user = await Auth.update({ id }, { name });
    if (!user.affected) {
      throw new NotFoundException();
    }
    return "User Updated Successfully";
  }
}
