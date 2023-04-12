import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthsService } from "./auth.service";

@Module({
  controllers: [AuthController],
  providers: [AuthsService]
})
export class AuthModule {}
