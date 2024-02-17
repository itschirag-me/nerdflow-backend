import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Env } from './env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  app.setGlobalPrefix(configService.get(Env.API_PREFIX));
  app.enableCors({
    origin: [configService.get(Env.ALLOW_ORIGIN)],
  });
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(configService.get(Env.PORT));
}
bootstrap();
