import { JwtService } from "@nestjs/jwt";
import { Auth } from "./auth.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthHelper {
  constructor(private jwtService: JwtService) {}

  async tokenGenerator(user: Auth) {
    const { name, id, email } = user;
    const access_token = this.jwtService.sign({
      name,
      sub: id,
      email
    });
    return access_token;
  }


}
