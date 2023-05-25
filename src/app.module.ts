import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfigAsync } from "./config/typeorm.config";
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { TransController } from "./transactions/transaction.controller";
import { TransService } from "./transactions/transaction.service";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    PassportModule,
  ],
  controllers: [AppController, TransController],
  providers: [AppService, TransService, JwtService]
})
export class AppModule { }
