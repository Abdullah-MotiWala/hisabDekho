import { JwtModuleAsyncOptions } from "@nestjs/jwt";

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => ({
    secret: process.env.JWT_SECRET,
    global: true,
    signOptions: { expiresIn: process.env.JWT_EXPIRES_IN }
  })
};
