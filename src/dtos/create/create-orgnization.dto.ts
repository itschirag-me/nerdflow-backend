import { PickType } from '@nestjs/swagger';
import { OrganizationDto } from '../base/organization.dto';

export class CreateOrgnizationDto extends PickType(OrganizationDto, [
  'name',
  'description',
]) {}
