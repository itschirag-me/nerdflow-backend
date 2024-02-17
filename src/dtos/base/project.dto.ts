import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsArray, IsNumberString, IsString } from 'class-validator';
import { TaskDto } from './task.dto';
import { TeamIdDto } from './team.dto';

export class ProjectDto {
  @ApiProperty()
  @IsNumberString()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsArray()
  tasks: TaskDto[];

  @ApiProperty()
  team: TeamIdDto;
}

export class ProjectIdDto extends PickType(ProjectDto, ['id']) {}
