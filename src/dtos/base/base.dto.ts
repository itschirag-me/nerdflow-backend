import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class BaseDto {
  @ApiProperty()
  @IsNotEmpty()
  created: Date;

  @ApiProperty()
  @IsNotEmpty()
  updated: Date;

  @ApiProperty()
  @IsNotEmpty()
  deleted: Date | null;
}
