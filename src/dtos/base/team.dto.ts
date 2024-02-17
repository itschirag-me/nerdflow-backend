import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { BaseDto } from './base.dto';
import { UserDto } from './user.dto';

export class TeamDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @ValidateNested()
  members: UserDto[];
}

export class TeamIdDto extends PickType(TeamDto, ['id']) {}
