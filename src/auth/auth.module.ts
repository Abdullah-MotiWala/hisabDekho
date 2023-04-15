import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthsService } from "./auth.service";
import { AuthHelper } from "./auth.helper";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      secret: "secret",
      global: true,
      signOptions: { expiresIn: "4h" }
    })
  ],
  controllers: [AuthController],
  providers: [AuthsService, AuthHelper]
})
export class AuthModule {}
