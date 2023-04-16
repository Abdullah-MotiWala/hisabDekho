import { json } from "body-parser";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(json());
  await app.listen(8000);
}
bootstrap();
