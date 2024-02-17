import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { AuthController } from '../controllers/auth/auth.controller';
import { UserService } from '@/services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@/entities/user.entity';
import { HelperService } from '@/shared/services/helper.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Env } from '@/env.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: configService.get(Env.JWT_SECRET),
        signOptions: {
          expiresIn: configService.get(Env.JWT_DURATION),
          algorithm: 'HS256',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, HelperService, ConfigService],
})
export class AuthModule {}
