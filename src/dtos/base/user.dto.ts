import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { BaseDto } from './base.dto';
import { TeamIdDto } from './team.dto';
import { OrganizationIdDto } from './organization.dto';

export class UserDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  teamId: TeamIdDto;

  @ApiProperty()
  organization: OrganizationIdDto;
}

export class UserIdDto extends PickType(UserDto, ['id']) {}
