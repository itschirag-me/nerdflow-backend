import { UserController } from '@/controllers/user/user.controller';
import { UserEntity } from '@/entities/user.entity';
import { UserService } from '@/services/user/user.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
