import { PickType } from '@nestjs/swagger';
import { TaskDto } from '../base/task.dto';

export class CreateTaskDto extends PickType(TaskDto, [
  'name',
  'description',
  'taskId',
  'taskNumber',
]) {}
