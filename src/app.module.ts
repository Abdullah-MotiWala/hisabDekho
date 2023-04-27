import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfigAsync } from "./config/typeorm.config";
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    PassportModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
