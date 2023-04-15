import { AuthsService } from "./auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { MESSAGES } from "./auth.utils";
import * as bcrypt from "bcrypt";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthsService) {
    super();
  }

  async validate(email: string, password: string) {
    const user = await this.authService.findOne({ email, password });

    // checking if user exist
    if (!user) throw new UnauthorizedException(MESSAGES.CRED_NOT_MATCHED);
    return user;
  }
}
