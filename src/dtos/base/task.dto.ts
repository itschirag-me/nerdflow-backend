import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from './base.dto';
import { UserIdDto } from './user.dto';

export class TaskDto extends BaseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  taskId: string;

  @ApiProperty()
  taskNumber: string;

  @ApiProperty()
  assignee: UserIdDto;
}
