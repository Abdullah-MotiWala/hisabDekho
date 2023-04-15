import { JwtService } from "@nestjs/jwt";
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException
} from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // add your authentication logic here
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      // verifying toke
      const payload = await this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET
      });

      //   embedd user detail as req.use
      request["user"] = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(
    request: Request | undefined
  ): string | undefined {
    const authHeader = request?.headers?.["token"] as string | undefined;

    // if token not found
    if (!authHeader) {
      return undefined;
    }

    // if type is Bearer sent the token otherwise undefined
    const [type, token] = authHeader.split(" ");
    return type === "Bearer" ? token : undefined;
  }
}
