import { ConfigModule, ConfigService } from "@nestjs/config";
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions
} from "@nestjs/typeorm";

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmConfig {
    return {
      type: "postgres",
      port: configService.get("DB_PORT"),
      host: configService.get("DB_HOST"),
      username: configService.get("DB_USERNAME"),
      password: configService.get("DB_PASSWORD"),
      database: configService.get("DB_NAME"),
      synchronize: true,
      entities: [__dirname + "/../**/*.entity{.ts,.js}"]
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService)
};
