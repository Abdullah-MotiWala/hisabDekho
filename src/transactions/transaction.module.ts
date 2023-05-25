import { Module } from "@nestjs/common";
import { TransController } from "./transaction.controller";
import { TransService } from "./transaction.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConfig } from "src/config/jwt.config";

@Module({
    imports: [JwtModule.registerAsync(jwtConfig)],
    controllers: [TransController],
    providers: [TransService]
})
export class TransactonModule { }
