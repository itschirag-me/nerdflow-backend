import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Env, validationSchema } from './env.config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks.module';
import { OrganizationModule } from './modules/organization.module';
import { TeamModule } from './modules/team.module';
import { UserModule } from './modules/user.module';
import { ProjectModule } from './modules/project.module';
import { AuthModule } from './modules/auth.module';

const envFilePath = `${process.cwd()}/env/.env.${process.env.NODE_ENV}`;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      validationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        ({
          type: configService.get(Env.DB_TYPE),
          host: configService.get(Env.DB_HOST),
          port: configService.get(Env.DB_PORT),
          username: configService.get(Env.DB_USER),
          password: configService.get(Env.DB_PASS),
          database: configService.get(Env.DB_NAME),
          schema: 'public',
          synchronize: configService.get(Env.DB_SYNCRONIZE),
          logging: configService.get(Env.DB_LOGGING),
          entities: [__dirname + '/**/*.entity.{ts,js}'],
        } as TypeOrmModuleOptions),
      inject: [ConfigService],
    }),
    TasksModule,
    OrganizationModule,
    TeamModule,
    UserModule,
    ProjectModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
