import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthsService } from "./auth.service";
import { AuthHelper } from "./auth.helper";
import { JwtModule } from "@nestjs/jwt";
import { jwtConfig } from "src/config/jwt.config";

@Module({
  imports: [JwtModule.registerAsync(jwtConfig)],
  controllers: [AuthController],
  providers: [AuthsService, AuthHelper]
})
export class AuthModule {}
