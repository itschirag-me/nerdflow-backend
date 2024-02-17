import { PickType } from '@nestjs/swagger';
import { ProjectDto } from '../base/project.dto';

export class CreateProjectDto extends PickType(ProjectDto, [
  'name',
  'description',
  'team',
]) {}
