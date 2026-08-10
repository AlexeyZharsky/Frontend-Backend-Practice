import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import expressBasicAuth from 'express-basic-auth';
import { AppModule } from './app.module';
import { ADMIN_LOGIN, ADMIN_PASSWORD } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(expressBasicAuth({ users: { [ADMIN_LOGIN]: ADMIN_PASSWORD } }));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      whitelist: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
