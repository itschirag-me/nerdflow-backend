import { PickType } from '@nestjs/swagger';
import { TeamDto } from '../base/team.dto';

export class CreateTeamDto extends PickType(TeamDto, [
  'name',
  'description',
  'members',
]) {}
