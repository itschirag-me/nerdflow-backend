import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { HelperService } from '@/shared/services/helper.service';
import { CreateUserDto } from '@/dtos/create/create-user.dto';
import { LoginDto } from '@/dtos/base/login.dto';
import { Errors } from '@/shared/enums/error.enum';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Env } from '@/env.config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly helperService: HelperService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async registerUser(createUserDto: CreateUserDto) {
    const newUser = this.userService.create(createUserDto);

    newUser.password = await this.helperService.encryptPassword(
      newUser.password,
    );

    return this.userService.saveOne(newUser);
  }

  async loginUser(loginDto: LoginDto) {
    const user = await this.userService.findOne({
      where: { email: loginDto.email },
    });

    if (!user) {
      throw new UnauthorizedException(Errors.UNAUTHORIZED);
    }

    const isMatched = this.helperService.comparePassword(
      loginDto.password,
      user.password,
    );

    if (!isMatched) {
      throw new UnauthorizedException(Errors.UNAUTHORIZED);
    }

    const token = this.jwtService.sign({ userId: user.id });

    return {
      token,
      expiresIn: this.configService.get(Env.JWT_DURATION),
    };
  }
}
