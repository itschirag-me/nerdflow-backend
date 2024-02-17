import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional } from 'class-validator';

export class BaseQueryDto {
  @ApiProperty()
  @IsNumberString()
  @IsOptional()
  page: string;

  @ApiProperty()
  @IsNumberString()
  @IsOptional()
  limit: string;
}
