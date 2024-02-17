import { ApiProperty, PickType } from '@nestjs/swagger';
import { BaseDto } from './base.dto';
import { IsArray, IsString } from 'class-validator';
import { UserDto } from './user.dto';

export class OrganizationDto extends BaseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsArray()
  employees: UserDto[];
}

export class OrganizationIdDto extends PickType(OrganizationDto, ['id']) {}
