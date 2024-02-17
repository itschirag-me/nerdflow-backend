import { PickType } from '@nestjs/swagger';
import { UserDto } from '../base/user.dto';

export class CreateUserDto extends PickType(UserDto, [
  'name',
  'email',
  'password',
  'organization',
]) {}
