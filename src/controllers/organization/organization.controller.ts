import { CreateOrgnizationDto } from '@/dtos/create/create-orgnization.dto';
import { BaseQueryDto } from '@/dtos/query/pagination-query.dto';
import { OrganizationService } from '@/services/organization/organization.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller({ path: 'organization', version: '1' })
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get('/')
  async getOrganization(@Query() baseQueryDto: BaseQueryDto) {
    const page = +baseQueryDto.page || 1;
    const limit = +baseQueryDto.limit || 10;

    const [data, totalCount] = await this.organizationService.findAndCount({
      relations: ['employees'],
      skip: (page - 1) * limit,
      take: limit,
    });

    return { data, metaData: { page, limit, totalCount } };
  }

  @Post('/')
  async createOrganization(
    @Body() createOrganizationDto: CreateOrgnizationDto,
  ) {
    const newOrganization = this.organizationService.create(
      createOrganizationDto,
    );
    return this.organizationService.saveOne(newOrganization);
  }
}
