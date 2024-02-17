import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { CreateUserDto } from '@/dtos/create/create-user.dto';
import { LoginDto } from '@/dtos/base/login.dto';

@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-up')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }

  @Post('/sign-in')
  async signIn(@Body() loginDto: LoginDto) {
    return this.authService.loginUser(loginDto);
  }
}
